const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, 'src/index.html')
    }),
    // new ScriptExtHtmlWebpackPlugin({
    //   defaultAttribute: 'defer'
    // })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};