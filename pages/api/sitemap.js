import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

import { slugBlogs, getMetaBlogFromSlug } from "../../utils/blog";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    const blogs = slugBlogs.map(getMetaBlogFromSlug);

    const links = blogs.map((blog) => ({
      url: `/blog/${blog.slug}`,
      changefreq: "daily",
      priority: 0.9,
    }));

    // XML sitemap string
    const sitemapOutput = (
      await streamToPromise(Readable.from(links).pipe(smStream))
    ).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);

    res.send(JSON.stringify(e));
  }
};
