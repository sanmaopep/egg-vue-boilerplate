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
**NOTE：**脚手架同时打开了一个localhost:9000，7001端口的服务通过代理的方式访问webpack-dev-server产生的文件。因此要确保9000端口和7001端口不被占用。

### 生产模式

```bash
$ npm run build
$ npm start
$ npm stop
```

## 组织结构

```
/app -- 参考eggjs文件组织结构
/src -- 存放前端代码
	/admin -- 页面名(需要在webpack.config.js中配置)
	/index -- 页面名
	/student -- 页面名
		/components 存在可复用的组件
		/container 存放整体布局组件
		/service 存放ajax代码
		/store 存放vuex代码
			/modules vuex分模块代码
		index.js	入口文件
		router.js	配置路由
/utils -- 存放工具函数（前后端可复用）
/build -- 脚手架脚本及其相关文件
/migrations -- 数据库迁移相关文件
```

1. eggjs为阿里后端开发框架，参考https://eggjs.org
2. 数据库migrate采用db-migrate框架，相关文件在migrations下，类似于laravel的migrate


## Migrate

需要先全局安装：

```shell
$ yarn global add db-migrate
$ db-migrate create add-user
```

具体配置参考：https://db-migrate.readthedocs.io/en/latest/

## 配置说明

### 多页面Vue入口文件配置

修改webpack.config.js最上面的const entry里面的内容。

```javascript
const entry = {
    // 入口文件自定义：
    'admin': './src/admin/index.js',
    'index': './src/index/index.js'
};
```
## 测试说明

