const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx", "tsx"],
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
});
