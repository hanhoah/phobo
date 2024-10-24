import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Params {
  locale: string;
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
      title: data.title,
      slug: filename.replace(/\.md$/, ""), // Entferne die Dateiendung für den Slug
    };
  });

  return (
    <div>
      <h1>Blog Index Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/${locale}/blog/${post.slug}`}>{post.title}</a>
          </li>
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
