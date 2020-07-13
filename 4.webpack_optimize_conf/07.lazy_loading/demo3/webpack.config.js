/**
 * 预加载（prefetch）：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源（目前兼容性不好，特别是在移动端，慎用）
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    // [name]：获取文件名
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    // html 模板和压缩
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  // 1. 可以将 node_modules 中代码单独打包一个 chunk 最终输出
  // 2. 自动分析多个入口 chunk 中，有没有公共文件，如果有则打包成单独一个 chunk
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
