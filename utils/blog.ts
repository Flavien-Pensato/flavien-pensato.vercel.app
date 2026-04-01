import fs from "fs";
import path from "path";

export const blogPath = path.join(process.cwd(), "pages/blog");

export async function getBlogs() {
  const blogList = fs
    .readdirSync(blogPath)
    .filter((pathname) => pathname.includes(".mdx"))
    .map((slugBlog) => slugBlog.replace(".mdx", ""));

  const metaList: any[] = [];

  for (const slug of blogList) {
    const data = await import("../pages/blog/" + slug + ".mdx");
    if (data.meta) {
      metaList.push(data.meta);
    }
  }

  return metaList;
}
