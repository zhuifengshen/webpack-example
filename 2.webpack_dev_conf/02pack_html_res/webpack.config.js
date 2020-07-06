/**
 * loaders -> 1、下载； 2、配置使用；
 * plugins -> 1、下载； 2、导入； 3、配置使用；
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [],
  },
  plugins: [
    // html-webpack-plugin 默认会创建一个空的HTML（也可以指定模板），并自动引入打包输出的所有资源（JS、CSS）
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
}
