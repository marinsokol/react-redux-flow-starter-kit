/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
let plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

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
  devServer: { inline: true },
  entry: {
    "index": [
      'babel-regenerator-runtime',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './src/app'
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
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
