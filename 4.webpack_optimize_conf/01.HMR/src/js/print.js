// eslint-disable-next-line
console.log('print.js 被加载了~')

function print() {
  const content = 'hello print~'
  // eslint-disable-next-line
  console.log(content)
  const element = document.createElement('div')
  element.innerHTML = 'hello webpack~'
  document.body.appendChild(element)
}

export default print
