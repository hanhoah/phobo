import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useTranslations } from "next-intl";

interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
}

const BlogPage = ({ params }: { params: { locale: string } }) => {
  const t = useTranslations("blog");

  // Dynamisch die Sprache aus dem URL-Pfad abrufen
  const locale = params.locale; // Hier kannst du den aktuellen Locale-Wert dynamisch abrufen

  const postsDirectory = path.join(process.cwd(), "src/posts", locale);

  // Überprüfen, ob der Ordner existiert und Dateien enthält
  console.log("postsDirectory", postsDirectory);
  console.log("number of files", fs.readdirSync(postsDirectory).length);
  if (
    !fs.existsSync(postsDirectory) ||
    fs.readdirSync(postsDirectory).length === 0
  ) {
    return (
      <div>
        <h1>{t("title")}</h1>
        <p>{t("noResults")}</p>{" "}
        {/* Füge einen Text hinzu, wenn keine Beiträge vorhanden sind */}
      </div>
    );
  }

  const files = fs.readdirSync(postsDirectory);

  const posts: Post[] = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    return {
      title: data.title,
      slug: filename.replace(".md", ""),
      date: data.date,
      description: data.description,
    };
  });

  // Die letzten 20 Beiträge
  const recentPosts = posts.slice(0, 20);

  return (
    <div>
      <ul className="no-bullets">
        {recentPosts.map((post) => (
          <li key={post.slug}>
            <a href={`/${locale}/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <small>{post.date}</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
