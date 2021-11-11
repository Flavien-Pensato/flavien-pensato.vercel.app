import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    const links = [
      {
        url: "/blog/modifier-la-taille-d-un-svg",
        changefreq: "daily",
        priority: 0.9,
      },
      {
        url: "/blog/recette-de-crepe",
        changefreq: "daily",
        priority: 0.9,
      },
    ];

    // XML sitemap string
    const sitemapOutput = (
      await streamToPromise(Readable.from(links).pipe(smStream))
    ).toString();

    smStream.end();

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
