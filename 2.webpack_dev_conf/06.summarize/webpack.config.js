const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 处理 css 资源
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理 less 资源
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 处理图片资源
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          outputPath: 'imgs',
        },
      },
      // 处理 HTML 中的图片资源
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // 处理其他资源（排除css/js/html等资源）
      {
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
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
