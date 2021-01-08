const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const webpackConfigBase = {

  entry: {
    index: path.resolve(__dirname, "../src/index.tsx"),
    // vendor: ["react", "react-dom", "dayjs", "axios", "echarts", "antd"]
  },

  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "../public"),
    publicPath: "./"
  },

  stats: "errors-only",

  resolve: {
    extensions: [ ".ts", ".tsx", ".js" ],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@shared": path.resolve(__dirname, "../src/shared"),
      "@util": path.resolve(__dirname, "../src/util")
    },
  },

  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          // name: "commons",
          // chunks: "initial",
          // minChunks: 2

          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    runtimeChunk: { name: "runtime" },
  },

  plugins: [
    new ProgressBarPlugin({
      format: "build [:bar] :percent (:elapsed seconds)",
      clear: false,
      width: 60
    })
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, use: [{loader: "url-loader", options: { limit: 8192 }}] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: "file-loader" }
    ]
  }

};

module.exports = webpackConfigBase;
