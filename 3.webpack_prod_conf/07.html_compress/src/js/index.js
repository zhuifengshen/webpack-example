const add = (x, y) => x + y

// eslint-disable-next-line
console.log(add(1, 2))

const promise = new Promise(resolve => {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('定时器执行完了~')
    resolve()
  }, 1000)
})

// eslint-disable-next-line
console.log(promise)
