import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({showSpinner: false});

const instance = axios.create({
  // 默认的配置
  baseURL: BASE_URL, // -> http://123.57.176.198:3000/banner
  timeout: TIMEOUT, // -> 5000
  headers: {},
  withCredentials: true
})

instance.interceptors.request.use(
  // 请求拦截
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
    NProgress.start(); // 启动滚动条
    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    
    // 3.params/data序列化的操作
    return config
  },
  (err) => {}
)
instance.interceptors.response.use(
  // 响应拦截
  (res) => {
    NProgress.done()// 关闭滚动条
    return res.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return err.response.data
  }
)

export default instance
