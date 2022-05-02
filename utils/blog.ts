import fs from "fs";
import path from "path";

export const blogPath = path.join(process.cwd(), "pages/blog");

export const blogs = await (async () => {
  const blogList = fs
    .readdirSync(blogPath)
    .filter((pathname) => pathname.includes(".mdx"))
    .map((slugBlog) => slugBlog.replace(".mdx", ""));

  const metaList = blogList.reduce((acc, path) => {
    const data = require("../pages/blog/" + path + ".mdx");

    if (data.meta) {
      acc.push(data.meta);
    }

    return acc;
  }, []);

  return metaList;
})();
