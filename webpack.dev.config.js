const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

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
           //  options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
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
