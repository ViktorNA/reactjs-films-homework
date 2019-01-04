const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack/webpack.dev');

const compiler = webpack(config);
const port = 3000;
const app = express();

switch (process.env.NODE_ENV) {
  case 'development':
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
    break;
  case 'production':
    app.use('/', expressStaticGzip(path.join(__dirname, 'build')));
    break;
  default: console.error('Unknown mode');
}


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('Listening on port %s.', port);
  }
});
