# React技术栈 网易云音乐项目实战

## 项目简介
### 技术栈
基于 `react-router` + `styled-components` + `axios` + `ant design` + `react-redux` + `redux-thunk` + `react-transition-group` 等开发一款PC端网易云音乐PC Web项目，UI 界面参考了PC版的网易云音乐、flex 布局。

## 预览地址
😋 项目预览地址：www.wanguancs.top
😎 开发文档: www.juejin.im??

## 界面和功能展示
### 推荐/新碟上架/榜单

![06](https://mingcloudpic.oss-cn-beijing.aliyuncs.com/img/20201020210035.gif)

![05](https://mingcloudpic.oss-cn-beijing.aliyuncs.com/img/20201020210132.gif)

### 排行榜

![03](https://mingcloudpic.oss-cn-beijing.aliyuncs.com/img/20201020210123.png)

### 播放器

![jie-shao](https://mingcloudpic.oss-cn-beijing.aliyuncs.com/img/20201020205714.gif)

![jie-sha1o-02](https://mingcloudpic.oss-cn-beijing.aliyuncs.com/img/20201020205846.gif)

## 技术栈

### 前端

- `React`：用于构建用户界面的 `MVVM` 框架
- `styled-components`：解决组件内容编写样式会影响全局样式导致冲突
- `react-router`：为单页面应用提供的路由系统，使用了 `Lazy Loading Routes` 技术来实现异步加载优化性能
- `react-router-config`：集中式路径映射表管理
- `redux`：React 集中状态管理，在多个组件共享某些状态时非常方便
- `react-redux`：帮助我们链及`redux`、`react`的辅助工具
- `immutable`：`reudx`中保存的`state`使用`immutable`进行管理
- `axios`: 发送网络请求，请求拦截和响应拦截
- `redux-thunk`: 在`redux`中进行异步请求
- ...

### 后端

- `Node.js`：利用 `Express` 搭建的本地测试服务器
- `axios`：用来请求后端 `API` 音乐数据
- [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/)：网易云音乐 `NodeJS` 版 `API`，提供音乐数据

### 其他工具

- create-react-app：React 脚手架工具，快速初始化项目代码
- eslint：代码风格检查工具，帮助我们规范代码书写


## Build Setup
- 克隆代码到本地之后，需要运行 NeteaseCloudMusicApi，来起一个音乐的 API 接口。(可选)
- 如果需要在服务器上搭建的话就需要将 API 放到自己的服务器上面。(可选)
- 已经部署到服务器的网易云音乐接口: http://123.57.176.198:3000/

``` powershell
# yarn dependencies
yarn install

# serve with hot reload at localhost:3000
yarn satrt

# build for production with minification
yarn build
```


## 感谢

- 非常感谢[王红元](https://github.com/coderwhy)老师的，React核心技术实战让我学习到很多 react 的知识。
- 非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi), 接口很稳定，文档很完善


## 最后
如果觉得项目还不错的话 👏，就给个 star ⭐ 鼓励一下吧~

