const path = require('path');
const webpackBase = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

webpackBase.plugins.splice(0, 0, ...[
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [ path.resolve(__dirname, '../public') ],
    cleanStaleWebpackAssets: false
  }),
  new HtmlWebpackPlugin({
    title: 'stock',
    template: path.resolve(__dirname, '../src/index.html'),
    filename: path.resolve(__dirname, '../public/index.html'),
  })
]);

module.exports = {
  mode: 'production',
  ...webpackBase
};
