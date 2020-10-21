// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge.merge(baseConfig, {
  plugins: [
    // new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      favicon: './src/img/imealLogo.png'
  })
  ]
})