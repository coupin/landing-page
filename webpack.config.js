const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require("autoprefixer");
const postcssimport = require("postcss-import");
const postcsspresetenv = require("postcss-preset-env");
const cssnano = require("cssnano");

module.exports = {
  cache: false,
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|.mjs/,
        // exclude: /node_modules/,
        loaders: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging',
          }
        }, 'css-loader', "postcss-loader", 'sass-loader'],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        exclude: /node_modules/,
        loader:'file-loader?name=images/[path][name].[ext]&context=./src/images'
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      file: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new HtmlWebpackPlugin({
      title: 'Terms & Conditions',
      filename: 'terms.html',
      template: path.join(__dirname, 'src/terms.html')
    }),
    new HtmlWebpackPlugin({
      title: 'Privacy Policy',
      filename: 'privacy.html',
      template: path.join(__dirname, 'src/privacy.html')
    }),
    new HtmlWebpackPlugin({
      title: 'Home v2',
      file: 'index.html',
      template: path.join(__dirname, 'src/v2/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [
            autoprefixer(),
            postcssimport(),
            postcsspresetenv(),
            cssnano(),
          ]
      }
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    // open: true,
    disableHostCheck: true,
  },
  externals: [
    {
      "window": "window",
      "document": "document",
    }
  ]
};