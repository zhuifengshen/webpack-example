// 正常加载可以认为是并行加载（同一时间加载多个文件
import { mul } from './test'

console.log('index.js 文件被加载了。。。')

document.getElementById('btn').onclick = function () {
  console.log(mul(3, 3))
}
