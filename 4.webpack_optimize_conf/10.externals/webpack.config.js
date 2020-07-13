/**
 * externals: 指定哪些类库使用外部CDN资源，打包时不涵盖进来，不过需要在入口HTML文件引入
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  externals: {
    // 使用外部 jQuery 资源，不进行打包
    jquery: 'jQuery',
  },
}
