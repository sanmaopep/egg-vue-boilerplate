# egg-vue-boilerplate

fullstack framework based on eggjs and vuejs

要求 node版本>=7.6.0

## QuickStart

### 开发模式

推荐使用Facebook的包管理工具yarn代替npm进行依赖安装。

```bash
$ npm install -g yarn
$ yarn install
$ npm run dev
$ open http://localhost:7001/
```
NOTE：脚手架同时打开了一个localhost:9000，7001端口的服务通过代理的方式访问webpack-dev-server产生的文件。因此要确保9000端口不被占用

### 生产模式

```bash
$ npm run build
$ npm start
$ npm stop
```

### 文件组织结构


### 使用框架与插件：
#### eggjs
阿里后端开发框架
参考https://eggjs.org
#### db-migrate
nodejs的migrate工具，类似于laravel和rails的migrate