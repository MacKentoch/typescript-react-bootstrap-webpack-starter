/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// #region constants
const outputPath = path.join(__dirname, 'docs/assets');
const devServerRootPath = path.join(__dirname, 'docs');
const publicPath = '/assets/';
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/front/index.tsx');
// #endregion

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['react-hot-loader/patch', indexFile],
  },
  resolve: {
    modules: ['src/front', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: outputPath,
    publicPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'awesome-typescript-loader' },
        exclude: [nodeModulesDir],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/front/statics/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    contentBase: devServerRootPath,
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = config;
