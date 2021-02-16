// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = {
  ...withMDX({
    pageExtensions: ["js", "jsx", "mdx"],
  }),
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
