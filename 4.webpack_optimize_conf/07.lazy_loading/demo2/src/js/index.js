// eslint-disable-next-line
console.log('index.js 文件被加载了。。。')
document.getElementById('btn').onclick = function () {
  // 懒加载：通过import动态导入语法，当文件需要使用时再加载
  import(/* webpackChunkName: 'test' */ './test').then(({ mul }) => {
    console.log(mul(3, 3))
  })
}
