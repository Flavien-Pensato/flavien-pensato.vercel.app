const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  output: 'standalone',
  pageExtensions: ["ts", "tsx", "mdx"],
});
