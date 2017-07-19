/* eslint-disable */

const webpack = require('webpack');
let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
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
