import { getPostData } from "@/lib/markdown";

interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
}

interface Params {
  slug: string;
  locale: string;
}

const BlogPost = ({
  frontmatter,
  content,
}: {
  frontmatter: any;
  content: string;
}) => {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default async function Page({ params }: { params: Params }) {
  const { locale, slug } = params;
  const { frontmatter, content } = await getPostData(slug, locale);

  return (
    <div className="flex flex-row">
      <div className="md:w-3/5  px-2">
        <BlogPost frontmatter={frontmatter} content={content} />
      </div>
    </div>
  );
}
