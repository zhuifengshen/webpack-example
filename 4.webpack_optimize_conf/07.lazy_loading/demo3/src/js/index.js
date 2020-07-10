// eslint-disable-next-line
console.log('index.js 文件被加载了。。。')
document.getElementById('btn').onclick = function () {
  // 预加载（prefetch）：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源（目前兼容性不好，特别是在移动端，慎用） --> 失效
  import(/* webpackChunkName: 'test', webpackPrefetch: true */ './test').then(
    ({ mul }) => {
      console.log(mul(3, 3))
    }
  )
}
