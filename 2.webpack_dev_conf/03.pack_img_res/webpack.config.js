const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 使用多个 loader 用 use
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 使用单个 loader 用 loader
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader', // 处理 css 中的图片，但无法处理 HTML 中的图片，需要下载 url-loader 和 file-loader
        options: {
          limit: 8 * 1024, // 图片小于8kb会转换为 Base64 编码，减少请求数量，减轻服务器压力
          esModule: false, // 关闭url-loader默认使用es6模块化，跟html-loader一起使用commonjs，避免[object Module]问题
          name: '[hash:10].[ext]', // 图片重命名，[hash:10]去图片 hash 的前10位，[ext]去文件原来的扩展名
        },
      },
      {
        test: /\.html$/, // 处理 HTML 中的图片（负责引入 img，从而能被 url-loader 进行处理），需要下载 html-loader
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    // html-webpack-plugin 默认会创建一个空的HTML（也可以指定模板），并自动引入打包输出的所有资源（JS、CSS）
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
}
