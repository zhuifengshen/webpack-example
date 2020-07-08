/**
 * devtool 指定 source-map 的方式
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 开启 HMR 功能后，HTML 文件不能热更新了，需要将其引入 entry 入口
  entry: ['./src/js/index.js', './src/index.html'],
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
    hot: true, // 开启 HMR 功能
  },
  // 指定 source-map 的方式
  devtool: 'eval-source-map',
}

/*
  source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

    source-map：外部
      错误代码准确信息 和 源代码的错误位置
    inline-source-map：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置
    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息
    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置
      只能精确的行，无法精确到列
    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置
      module会将loader的source map加入

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快，但体积大

    开发环境：速度快，调试更友好
      速度快(eval>inline>cheap>...)
        eval-cheap-souce-map
        eval-source-map
      调试更友好
        souce-map
        cheap-module-souce-map
        cheap-souce-map

      --> eval-source-map  / eval-cheap-module-souce-map

    生产环境：源代码要不要隐藏? 调试要不要更友好
      内联会让代码体积变大，所以在生产环境不用内联
      隐藏（nosources>hidden)
      nosources-source-map 全部隐藏
      hidden-source-map 只隐藏源代码，会提示构建后代码错误信息
      调试更友好
      --> source-map / cheap-module-souce-map
*/
