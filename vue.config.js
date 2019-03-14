'use strict'
const path = require('path')
// const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        '@design': resolve('src/design/index.scss')
      }
    }
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     '$': 'jquery',
    //     jQuery: 'jquery',
    //     Popper: ['popper.js', 'default'],
    //     'Util': 'exports-loader?Util!bootstrap/js/dist/util'
    //   })
    // ]
  }
}
