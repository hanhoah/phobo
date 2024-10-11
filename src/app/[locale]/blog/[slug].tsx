import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useTranslations } from "next-intl";
import { remark } from "remark"; // Importiere remark richtig
import html from "remark-html";
import { GetStaticProps } from "next";

interface Params {
  locale: string;
  slug: string;
}

interface Post {
  title: string;
  date: string;
  content: string;
}

const PostPage = ({ params }: { params: { locale: string; slug: string } }) => {
  const t = useTranslations("blog");
  const locale = params.locale;

  const postsDirectory = path.join(process.cwd(), "src/posts", locale);
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  // Überprüfen, ob die Datei existiert
  if (!fs.existsSync(filePath)) {
    return (
      <div>
        <h1>{t("title")}</h1>
        <p>{t("noPosts")}</p>
      </div>
    );
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(markdownWithMeta);

  // Markdown-Inhalt in HTML umwandeln
  const processedContent = remark().use(html).processSync(content).toString();

  const post: Post = {
    title: data.title,
    date: data.date,
    content: processedContent,
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export async function getStaticPaths() {
  const locales = ["de", "en", "vi", "zh"];

  const paths = locales.flatMap((locale) => {
    const postsDirectory = path.join(process.cwd(), "src/posts", locale);

    // Debugging: Überprüfen, ob der Ordner existiert
    if (!fs.existsSync(postsDirectory)) {
      console.error(`Directory not found: ${postsDirectory}`);
      return [];
    }

    const files = fs.readdirSync(postsDirectory);

    // Debugging: Protokolliere die gefundenen Dateien
    console.log(`Found files for locale "${locale}":`, files);

    return files.map((filename) => ({
      params: { locale, slug: filename.replace(".md", "") }, // Hier wird der slug generiert
    }));
  });

  // Debugging: Protokolliere die generierten Pfade
  console.log("Generated paths:", paths);

  return {
    paths,
    fallback: false, // Setze fallback auf false, um 404 für nicht vorhandene Seiten zu zeigen
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  console.log("Locale:", params.locale);
  console.log("Slug:", params.slug);

  const postsDirectory = path.join(process.cwd(), "src/posts", params.locale);
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  // Überprüfen, ob die Datei existiert
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return { notFound: true }; // Gibt eine 404 zurück, wenn die Datei nicht gefunden wird
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(markdownWithMeta);

  // Markdown-Inhalt in HTML umwandeln
  const processedContent = remark().use(html).processSync(content).toString();

  return {
    props: {
      post: {
        title: data.title,
        date: data.date,
        content: processedContent,
      },
    },
  };
}

export default PostPage;
