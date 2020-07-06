# Usage

## executive command:
```
默认方式打包，在当前目录下执行
webpack

自定义方式打包，在当前目录下执行
webpack ./src/index.js -o ./build/built.js --mode=development
webpack ./src/index.js -o ./build/built.js --mode=production
```

## summarize
- 1、default src/index.js as the entry point, and will generate dist/main.js as the output.
- 2、default mode is production.（生成环境比开发环境多一个压缩 js 代码）
- 3、默认 webpack 能打包 js/json 资源，无法处理 css/img 等其他资源，也无法将 ES6 模块化编译成浏览器能识别的模块化。
