const express = require('express');
const compression = require('compression');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = process.env.NODE_ENV === 'development' ? require('./config/webpack/webpack.dev') : require('./config/webpack/webpack.prod');

const port = 3000;
const compiler = webpack(config);
const app = express();


app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(compression());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('Listening on port %s.', port);
    console.info(process.env.NODE_ENV);
  }
});
