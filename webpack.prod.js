const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: './src/server.js',
  mode: 'production',
  target: 'node',
  externals: nodeExternals(),
  module: {
    noParse: [/\.min\.js$/, /\.bundle\.js$/],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-arrow-functions',
            [
              'babel-plugin-styled-components',
              {
                ssr: true,
              },
            ]],
          cacheCompression: true,
        },
      },
    ],
  },
});
