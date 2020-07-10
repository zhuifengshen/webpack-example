/**
 * 启动服务器指令：node server.js
 * 访问服务器地址：http://localhost:3100
 */

const express = require('express')

const app = express()
// express.static 向外暴露静态资源
app.use(express.static('build'))
app.listen(3100)
// eslint-disable-next-line
console.log('app started at port 3100...')
