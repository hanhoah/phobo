import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Interfaces definieren
export interface Frontmatter {
  title: string;
  date: string;
  description: string;
}

export interface PostData {
  frontmatter: Frontmatter;
  content: string;
}

export async function getPostData(
  slug: string,
  locale: string
): Promise<PostData> {
  try {
    // Pfad zur Markdown Datei
    const fullPath = path.join(
      process.cwd(),
      "src/posts",
      locale,
      `${slug}.md`
    );

    // Datei einlesen
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Frontmatter und Content extrahieren mit gray-matter
    const { data, content } = matter(fileContents);

    // Markdown zu HTML konvertieren
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Typsicherheit für frontmatter
    const frontmatter = {
      title: data.title ?? "Untitled",
      date: data.date ?? new Date().toISOString(),
      description: data.description ?? "",
      ...data, // weitere optionale Felder
    } as Frontmatter;

    return {
      frontmatter,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error in getPostData for slug ${slug}:`, error);
    throw new Error(`Failed to get post data for ${slug}`);
  }
}

// Optional: Hilfsfunktion um alle Posts zu bekommen
export function getAllPosts(locale: string): PostData[] {
  const postsDirectory = path.join(process.cwd(), "src/posts", locale);

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = {
      title: data.title ?? "Untitled",
      date: data.date ?? new Date().toISOString(),
      description: data.description ?? "",
      ...data,
    } as Frontmatter;

    return {
      frontmatter,
      content,
    };
  });

  // Sortiere Posts nach Datum, neueste zuerst
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}
