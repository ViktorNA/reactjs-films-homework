const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack/webpack.dev');

const port = 3000;
const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

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
