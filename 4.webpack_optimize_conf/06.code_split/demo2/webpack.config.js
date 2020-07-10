/**
 * 分割提取第三方类库
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 生成环境下 js 代码自动化压缩
  mode: 'production',
  // 制定 source-map 方式
  devtool: 'source-map',
  // 单入口
  // entry: './src/js/index.js',
  // 多入口
  entry: {
    index: './src/js/index.js',
    test: './src/js/test.js',
  },
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
