function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4))

// 通过 import 动态导入语法，让某个文件被单独打包成一个 chunk（懒加载原理）
import(/* webpackChunkName: 'test' */ './test')
  .then(({ mul }) => {
    // 文件加载成功
    console.log(mul(2, 2))
  })
  .catch(() => {
    // 文件加载失败
    console.log('文件加载失败')
  })
