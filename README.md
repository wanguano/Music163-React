# React技术栈 网易云音乐PC项目实战

## 项目简介
### 技术栈
基于 `react` + `redux` + `react-router` + `styled-components` + `axios` + `ant design` + `react-redux` + `redux-thunk` `immutable` + `redux-immutable` + `react-transition-group` 等开发一款PC端「网易云音乐PC」 Web项目，UI 界面参考了PC版的网易云音乐、flex 布局。

## 预览地址
- 😋 项目在线预览地址：www.wanguancs.top
- 😎 开发文档: https://juejin.im/post/6893817287917338632

## 最近更新
### 更新功能
- 登录功能：
  - 支持登录功能(待完善中...)
  - 暂时只支持“163邮箱”或“手机号”登录
- 歌曲列表：
  - 对歌曲列表支持拖拽排序，并会对播放顺序进行改变
- 搜索音乐框：
  - 优化在搜索歌曲时，支持键盘"↑"+"↓"来切换搜索歌曲内容
- 头部进度条：
  - 在页面路由跳转&网络请求时"添加头部进度条"显示
- 404页：
  - 添加404页，在路由没有匹配的页面时，会显示404页面

### 待优化
- 音乐播放列表无法记忆上次播放顺序
  - 问题：无法记忆上次歌曲列表拖拽更改的顺序
  - 状态：可以记忆列表拖拽后顺序✔
- 记忆在关闭页面前播放的音乐
  - 问题：在关闭页面前记忆当前播放的歌曲，再次打开时默认歌曲是关闭前播放的歌曲
  - 状态：完成✔
- 头部搜索歌曲"↑"+"↓"切换项问题
  - 问题：在我们搜索歌曲时"↑"+"↓"切换搜索项时，当对下面搜索内容不满意，切换不到搜索内容上，只能在固定搜索项进行切换
  - 状态：待改中..
- 歌曲列表播放顺序
  - 问题：在拖拽歌曲列表更改播放顺序后，上一首或下一首顺序不正确
  - 状态：待改中..
- 榜单切换bug
  - 在榜单切换时, 跳转其他页面, 再跳转回榜单页面(bug)
  - 状态: 完成✔
- ctrl+k 不能唤醒搜索框
  - 问题：在其他路由组件内使用快捷键不能唤醒搜索框
  - 状态：完成✔
- 在搜索音乐页面组件
  - 问题：头部(header)搜索框和当前组件内搜索框内容不同步  
  - 状态：完成✔
- Ctrl+k全局注册唤醒下拉框
  - 问题：在其他页面下，Ctrl+k不能唤醒
  - 状态：完成✔
- 本地存储歌曲删除
  - 问题：在从歌曲列表中移除歌曲时，并没有删除本地存储id
  - 状态：完成✔
### TO-DO-LIST（可能会开发）
- 本地存储音乐列表
  - 已知问题：使用`redux-persist`持久化数据存储，结合`immutable`报错
  - 状态：暂时手动对歌曲列表id进行本地存储✔
- 首次加载页面，可以自动义配置默认音乐列表歌曲
  - 问题：在首次加载页面时，可以自定义配置默认喜欢的音乐列表，而不是使用系统配置的默认音乐列表
- 独立登录功能？
  - 登录的信息保存在独立的服务器当中，便以后续扩展更多功能，歌单社区等等
- 上传音乐功能？
  - 用户可以自定义上传音乐，下次当前用户登录后依旧保存歌曲列表
- 社区（歌单| 热点分享）？
  - 发帖、评论

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


### 支持对歌曲列表进行拖拽排序

![](https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/20210315165207.gif)

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
- 已经部署到服务器的网易云音乐接口: http://39.102.36.212:3000/ (**默认的API接口**)

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
