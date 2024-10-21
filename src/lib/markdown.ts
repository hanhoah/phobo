import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const getPostData = async (slug: string) => {
  const filePath = path.join(process.cwd(), 'src/posts/de', `${slug}.md`);

  // Überprüfen, ob die Datei existiert
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Konvertiere den Markdown-Inhalt in HTML
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return { frontmatter, content: htmlContent };
};

export const generateStaticParams = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/posts/de');
  const files = fs.readdirSync(postsDirectory);

  const paths = files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));

  return paths;
};