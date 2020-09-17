# 网易云音乐项目实战

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## 项目简介

### 1.项目介绍

- 项目知识点
  - 
- 项目目标
  - 
- 如何进行学习
  - 



### 2.项目规范

- 项目规范：项目中有一些开发规范和代码风格

1. 文件夹、文件名称统一小写、多个单词以连接符（-）连接；
2. JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
3. CSS采用普通`CSS`和`styled-component`结合来编写
   - 全局采用普通CSS、局部采用styled-component
4. 整个项目不再使用`class`组件，统一使用函数式组件，并且全面拥抱`Hooks`；

5. 所有的函数式组件，为了避免不必要的渲染，全部使用`memo`进行包裹；

6. 组件内部的状态，使用`useState`、`useReducer`；业务数据全部放在`redux`中管理；

7. 函数组件内部基本按照如下顺序编写代码：
   - 组件内部`state`管理；
   - `redux`的`hooks`代码；
   - 其他组件`hooks`代码；
   - 其他逻辑代码；
   - 返回JSX代码；

8. `redux`代码规范如下: 
   - 每个模块有自己独立的`reducer`，通过`combineReducer`进行合并；
   - 异步请求代码使用`redux-thunk`，并且写在`actionCreators`中；
   - `redux`直接采用`redux hooks`方式编写，不再使用`connect`；

- 其他规范在项目中根据实际情况决定和编写；



### 3.React devtools标记隐藏

- 网易云官网为什么看不到react devtools标记
- https://github.com/facebook/react-devtools/issues/191

![](https://gitee.com/xmkm/cloudPic/raw/master/img/20200917204139.png)

```js
// disable react-dev-tools for this project
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
		window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? ()=>{} : null;
	}
}
```