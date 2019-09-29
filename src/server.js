import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.dev.config.js';

const APP_DIR = path.resolve(__dirname, '../');
const app = express();
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8080 : process.env.PORT;

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler));
}

app.use(express.static(path.join(APP_DIR + '/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(APP_DIR, '/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/healthcheck', (req, res) => {
  res.sendStatus(200);
});

console.log('listening at port:%s', port);
app.listen(port);