const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// directories go here
const APP_DIR = path.resolve(__dirname, "./src/js");
// const CSS_DIR = path.resolve(__dirname, "./src/css");
const HTML_DIR = path.resolve(__dirname, "./src/html");
const DIST_DIR = path.resolve(__dirname, "./dist");

module.exports = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: HTML_DIR + "/index.html",
      filename: "index.html"
    }),
  ]
};
