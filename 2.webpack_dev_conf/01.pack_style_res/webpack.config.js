/**
 * webpack.config.js webpack默认的配置文件名
 *
 * 所有构建工具都基于 nodejs 平台运行，所以模块化默认采用 commonjs
 */

const { resolve } = require('path')

// webpack 配置
module.exports = {
  // 入口配置
  entry: './src/index.js',
  // 输出配置
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname, 'build'),
  },
  // loaders 配置
  module: {
    // 详细 loader 配置，不同文件必须配置不同的 loader 处理
    rules: [
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些 loader 进行处理，use 数组中 loader 执行顺序：从右到左，从下到上，依次执行
        use: [
          // 创建 style 标签，将 js 中的样式资源插入到 head 中生效，需要下载 style-loader
          'style-loader',
          // 将 css 文件 编程 commonjs 模块加载到 js 中，需要下载 css-loader
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将 less 文件编译成 css 文件，需要下载 less less-loader
          'less-loader',
        ],
      },
    ],
  },
  // plugins 的配置
  plugins: [],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production',  // 发布模式
}
