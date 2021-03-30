const webpack = require('webpack');
const path = require('path');

// PLUGIN HTML
const HtmlWebPackPlugin = require('html-webpack-plugin');

// PLUGIN PARA UTILIZAR OS PATHS DO TS
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// PLUGIN PARA MOSTRAR OS ERROS NO NAVEGADOR
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  optimization: {
    // splitChunks: {
    //   // include all types of chunks
    //   chunks: 'all',
    // },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:3000/static/',
    compress: true,
    port: 3000,
    open: true,
    watchContentBase: true,
  },
  devtool: 'cheap-module-source-map',
};
