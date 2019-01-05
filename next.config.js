const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

module.exports = {
  async exportPathMap(defaultPathMap, {
    dev, dir, outDir,
  }) {
    if (dev) {
      return defaultPathMap;
    }

    await copyFile(join(dir, './static/robots.txt'), join(outDir, 'robots.txt'));
    await copyFile(join(dir, './static/sitemap.xml'), join(outDir, 'sitemap.xml'));

    return defaultPathMap;
  },
};
