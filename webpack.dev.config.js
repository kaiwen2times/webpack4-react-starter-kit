// webpack v4
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// directories go here
const APP_DIR = path.resolve(__dirname, './src/js');
const HTML_DIR = path.resolve(__dirname, './src/html');
const DIST_DIR = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: DIST_DIR,
    //compress: true,
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.jpeg$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: HTML_DIR + '/index.html',
      filename: 'index.html'
    }),
  ]
};
