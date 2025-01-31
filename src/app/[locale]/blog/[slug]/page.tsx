import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Markdown from "markdown-to-jsx";

interface Params {
  locale: string;
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = params;
  const postFilePath = path.join(
    process.cwd(),
    "src/posts",
    locale,
    `${slug}.md`
  );
  const fileContent = fs.readFileSync(postFilePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
  };
}

const BlogPostPage = async ({ params }: { params: Params }) => {
  const { locale, slug } = params;

  // Pfad zur Markdown-Datei
  const postFilePath = path.join(
    process.cwd(),
    "src/posts",
    locale,
    `${slug}.md`
  );
  const fileContent = fs.readFileSync(postFilePath, "utf8");

  // Frontmatter und Inhalt extrahieren
  const { data, content } = matter(fileContent);

  return (
    <article className="prose max-w-4xl mx-auto p-4">
      <h1>{data.title}</h1>
      <div className="text-gray-500 mb-8">
        <time dateTime={data.date}>
          {new Date(data.date).toLocaleDateString()}
        </time>
      </div>
      <Markdown>{content}</Markdown>
    </article>
  );
};

export default BlogPostPage;
