# Usage

## 初始化项目
```
npm init -y
```

## 安装依赖
```
npm -i webpack webpack-cli -D
```

## 全局安装依赖（方便在子目录下直接执行webpack命令）
```
npm -i webpack webpack-cli -g
```

## 传统引用脚本方式的弊端
```
<script src="./src/index.js"></script>
There are problems with managing JavaScript projects this way:
It is not immediately apparent that the script depends on an external library.
If a dependency is missing, or included in the wrong order, the application will not function properly.
If a dependency is included but not used, the browser will be forced to download unnecessary code.
```

## Webpack打包的好处
- 1、语法检测；
- 2、自动压缩；
- 3、兼容处理；
- 4、Bundling your application is especially powerful for HTTP/1.1 clients, as it minimizes the number of times your app has to wait while the browser starts a new request. For HTTP/2, you can also use Code Splitting to achieve best results.
