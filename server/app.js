/* eslint-disable */

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const port = process.env.PORT || 3050;
const compiler = webpack(webpackConfig);
const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  quiet: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler, {
  'log': false,
  'path': '/__webpack_hmr',
  'heartbeat': 10 * 1000
}));


app.use(express.static(path.resolve('./public')));
app.get('*', function (request, response) {
  response.sendFile(path.resolve('./public/index.html'));
});

const server = app.listen(port, function () {
  const port = server.address().port;
  console.log('Example app listening at http://localhost:', port);
});