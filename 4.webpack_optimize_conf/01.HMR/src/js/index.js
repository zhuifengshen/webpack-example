// 引入 iconfont 样式文件
import '../css/iconfont.css'
// 引入 less 样式文件
import '../css/index.less'
// 引入 js 模块
import print from './print'

// eslint-disable-next-line
console.log('index.js 被加载了~')

print()

function add(x, y) {
  return x + y
}

// eslint-disable-next-line
console.log(add(1, 2))

// 一旦 module.hot 为 true，说明开启了 HMR 功能
if (module.hot) {
  // 监听 print.js 文件的变化，然后执行回调函数，从而其他模块不会重新打包构建
  module.hot.accept('./print.js', () => {
    print()
  })
}
