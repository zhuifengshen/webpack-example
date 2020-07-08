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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 打包其他资源（排除css/js/html等资源）
        exclude: /\.(css|js|html|less)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  // 开发服务器 devServer 用来自动化编译、打开浏览器、刷新浏览器等，它只会在内存中编译，不会有任何编译结果文件输出，需要下载 webpack-dev-server
  // 启动命令：npx webpack-dev-server
  devServer: {
    contentBase: resolve(__dirname, 'build'), // 项目构建后的路径（服务器托管的路径）
    compress: true, // 启动 gzip 压缩
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
  },
}
