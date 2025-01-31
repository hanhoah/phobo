import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ImageCard from "../components/ImageCard";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Params {
  locale: string;
}

export async function generateMetadata({
  params: { locale },
}: {
  params: Params;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.blog" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

const BlogPage = async ({ params }: { params: Params }) => {
  const { locale } = params;

  // Pfad zum Verzeichnis der Posts
  const postsDirectory = path.join(process.cwd(), "src/posts", locale);

  // Alle Dateien im Verzeichnis lesen
  const filenames = fs.readdirSync(postsDirectory);

  // Posts laden und Metadaten extrahieren
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent); // Extrahiere die Metadaten

    return {
      image: data.featuredImage,
      title: data.title,
      description: data.description,
      slug: filename.replace(/\.md$/, ""), // Entferne die Dateiendung für den Slug
      date: new Date(data.date),
    };
  });

  // Assuming posts is an array of objects where each object has a 'date' property
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <div>
      <ul className="flex md:flex-row md:space-x-5 flex-col">
        {posts.map((post) => (
          <div key={post.slug}>
            <ImageCard
              title={post.title}
              description={post.description}
              image={post.image}
              link={`/${locale}/blog/${post.slug}`}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

// Statische Pfade für die Lokalisierung
export async function generateStaticParams() {
  const locales = ["de", "en", "vi", "zh"];

  return locales.map((locale) => ({
    locale,
  }));
}

export default BlogPage;
