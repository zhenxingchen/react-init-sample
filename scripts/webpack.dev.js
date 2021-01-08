const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBase = require('./webpack.base');

webpackBase.plugins.splice(0, 0, ...[
  new HtmlWebpackPlugin({
    title: 'stock',
    template: path.resolve(__dirname, '../src/index.html')
  }),
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    host: 'localhost',
    port: 6006,
    inline: true,
    historyApiFallback: true
  },
  ...webpackBase
};
