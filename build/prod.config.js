// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge.merge(baseConfig, {
  plugins: [
    // new VueLoaderPlugin(),
  ]
})