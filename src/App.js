import React, { memo, Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'
import store from './store'

import { BackTop, Skeleton } from 'antd'
import JMAppHeader from 'components/app-header'
import JMAppFooter from 'components/app-footer'
import JMAppPlayerBar from './pages/player/app-player-bar'
export default memo(function App() {
  /*
   *  ?. :保证这个对象前面必须有这个属性才可以调用
   *  ?? :当我们不确定前面的value是否一定有值时,可以添加默认值
   *
   */
  // -------?.--------
  // const arr1 = [1,2,3,4,5]
  // // 当arr为undefined时,不会报错
  // const newArr = undefined?.map((item) => item)
  // console.log(newArr)

  // -------??--------
  // const a = undefined ?? 'default' // 'default
  // const b = null ?? 'default' // 'default'
  // const c = false ?? 'default' // 'false'
  // const d = 0 ?? 'default' // 0
  // console.log(a, b, c, d)

  // -------对象不确定赋值(未兼容)--------
  // let a = { b: null, c: 10 }
  // // a.b有值吗? 有值就用自己的,没有就用右侧的value
  // a.b ??= 20
  // // a.c有值吗? 有值就用自己的,没有就用右侧的value
  // a.c ??= 20

  // other hook
  useEffect(() => {
    /* 
      * 本地存储操作
      *   1.保存当前登录状态
      *   2.标识当前登录用户
    */
    // const loginState = JSON.parse(localStorage.getItem('isLogin'))

    

  }, [])

  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
        <JMAppFooter />
        <JMAppPlayerBar />
        {/* 返回顶部 */}
        <BackTop />
      </HashRouter>
    </Provider>
  )
})
