# React技术栈 网易云音乐PC项目实战

## 项目简介
### 技术栈
基于 `react` + `redux` + `react-router` + `styled-components` + `axios` + `ant design` + `react-redux` + `redux-thunk` `immutable` + `redux-immutable` + `react-transition-group` 等开发一款PC端「网易云音乐PC」 Web项目，UI 界面参考了PC版的网易云音乐、flex 布局。

## 预览地址
- 😋 项目在线预览地址：www.wanguancs.top
- 😎 开发文档: https://juejin.im/post/6893817287917338632

## 界面和功能展示
### 推荐/新碟上架/榜单

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201107223943.gif)

### 路由切换

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201107225248.gif)


### 歌曲评论

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201107230432.gif)


### 排行榜

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201108133921.gif)



### 播放器

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201108130517.gif)



### 歌曲切换(随机、顺序、单曲循环)

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201108133347.gif)




### 歌曲搜索

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201107231246.gif)

- 新增：键盘事件↓  &  函数防抖
  - `ctrl+k` 搜索框获取焦点 & 唤醒搜索下拉框
  - `esc` 取消焦点 & 下拉框
  - `enter` 进入歌曲搜索详情

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201107231505.gif)


#### 歌曲搜索详情列表

- 在搜索框中按下`回车`即可，搜索列表**基本**功能实现

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20201107231549.gif)



## 技术栈

### 前端

- `React`：用于构建用户界面的 `MVVM` 框架
- `styled-components`：解决组件内容编写样式会影响全局样式导致冲突
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router`：为单页面应用提供的路由系统
- `react-router-config`：集中式路径映射表管理
- `redux`：React 集中状态管理，在多个组件共享某些状态时非常方便
- `react-redux`：帮助我们链及`redux`、`react`的辅助工具
- `immutable`：对`reudx`中保存的`state`使用`immutable`进行管理
- `redux-immutable`: 对根目录的`reducer`中`state`进行管理
- `redux-thunk`: 在`redux`中进行异步请求
- `propType`: 校验`props`类型及默认值
- `react-transition-group`: 添加过渡动画效果
- 项目中的优化: 函数式组件全部采用`memo`、路由懒加载、函数防抖

### 后端

- `Node.js`：利用 `Express` 搭建的本地测试服务器
- `axios`：用来请求后端 `API` 音乐数据
- [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/)：网易云音乐 `NodeJS` 版 `API`，提供音乐数据
- 也可以使用已经部署到服务器上的网易云接口: http://123.57.176.198:3000/

### 其他工具

- create-react-app：React 脚手架工具，快速初始化项目代码
- eslint：代码风格检查工具，帮助我们规范代码书写


## 构建项目
- 克隆代码到本地之后，需要运行 NeteaseCloudMusicApi，来起一个音乐的 API 接口。(**可选)**
- 如果需要在服务器上搭建的话就需要将 API 放到自己的服务器上面。(**可选)**
- 已经部署到服务器的网易云音乐接口: http://123.57.176.198:3000/ (**默认的API接口**)

``` powershell
# yarn dependencies
yarn install | npm install
 
# serve with hot reload at localhost:3000
yarn satrt  | npm satrt

# build for production with minification
yarn build  |  npm build
```


## 感谢

- 非常感谢[王红元](https://github.com/coderwhy)老师的，React核心技术实战让我学习到很多 react 的知识。
- 非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi), 接口很稳定，文档很完善


## 最后
如果觉得项目还不错的话 👏，就给个 star ⭐ 鼓励一下吧~