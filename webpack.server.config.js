const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const DIST_DIR = path.resolve(__dirname, './dist');
  const SERVER_DIR = (argv.mode === 'production') ?
    path.resolve(__dirname, './src/server.prod.js') :
    path.resolve(__dirname, './src/server.dev.js');

  return ({
    entry: {
      server: SERVER_DIR,
    },
    output: {
      path: DIST_DIR,
      filename: '[name].js',
      publicPath: '/'
    },
    target: 'node',
    node: {
      __dirname: true,
      __filename: true
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
      ]
    },
  })
};
