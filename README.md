# React技术栈 网易云音乐项目实战

## 项目简介
### 技术栈
基于 什么什么技术栈 等开发一款PC端网易云音乐PC Web项目，UI 界面参考了PC版的网易云音乐、flex 布局。

## 预览地址
😋 项目演示地址：???
😎 开发文档: ??

## 界面和功能展示
项目运行图片之类的..
**推荐/新碟上架/榜单**
图片...

**排行榜**

**播放器**


## 技术栈
前端

- React：用于构建用户界面的 MVVM 框架
- vue-router：为单页面应用提供的路由系统，使用了 Lazy Loading Routes 技术来实现异步加载优化性能
- vuex：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
- vue-lazyload：实现图片懒加载，节省用户流量，优化页面加载速度
- better-scroll：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅
- ES6：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用

后端

- Node.js：利用 Express 搭建的本地测试服务器
- axios：用来请求后端 API 音乐数据
- NeteaseCloudMusicApi：网易云音乐 NodeJS 版 API，提供音乐数据


其他工具

- create-react-app：React 脚手架工具，快速初始化项目代码
- eslint：代码风格检查工具，帮助我们规范代码书写


## Build Setup
- 克隆代码到本地之后，需要运行 NeteaseCloudMusicApi，来起一个音乐的 API 接口。

- 如果需要在服务器上搭建的话就需要将 API 放到自己的服务器上面。

``` powershell
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```


## 感谢

- 非常感谢[王红元](https://github.com/coderwhy)老师的，[React核心实战](https://ke.qq.com/course/2555753)让我学习到很多 react 的知识。
- 非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi),接口很稳定，文档很完善


## 最后
如果觉得我的项目还不错的话 👏，就给个 star ⭐ 鼓励一下吧~
