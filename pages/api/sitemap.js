import { SitemapStream, streamToPromise } from "sitemap";

import { slugBlogs, getMetaBlogFromSlug } from "../../utils/blog";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    const blogs = await Promise.all(slugBlogs.map(getMetaBlogFromSlug));

    blogs.forEach((blog) => {
      smStream.write({
        url: `/blog/${blog.slug}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

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
