/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(config.env)
  }),
];

if (config.__PROD__) {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    })
  );
}

module.exports = {
  devtool: 'source-map',
  devServer: { inline: true },
  entry: {
    app: config.__DEV__
      ? ['./src/app'].concat('webpack-hot-middleware/client?reload=true&timeout=10000')
      : ['./src/app'],
  },
  output: {
    path: path.resolve('./public/dist'),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'file-loader',
      }
    ],
  },
  plugins,
};
