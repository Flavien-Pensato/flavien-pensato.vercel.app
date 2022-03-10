import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const blogPath = path.join(process.cwd(), "data/blog");

export const slugBlogs = fs.readdirSync(blogPath).map((slugBlog) => slugBlog.replace(".mdx", ""));

interface Blog {
  type: string;
  slug: string;
  title: string;
  createAt: string;
}

type Meta = Pick<Blog, "type" | "title" | "createAt">;

export const getMetaBlogFromSlug = (slug): Meta => {
  const postFilePath = path.join(blogPath, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { data } = matter(source);

  return { ...(data as any), slug };
};
