import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const blogPath = path.join(process.cwd(), "data/blog");

export const slugBlogs = fs
  .readdirSync(blogPath)
  .map((slugBlog) => slugBlog.replace(".mdx", ""));

export const getMetaBlogFromSlug = (slug) => {
  const postFilePath = path.join(blogPath, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { data } = matter(source);

  return { ...data, slug };
};
