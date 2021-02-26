import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './router';
import store from './store';
// import initLoginInfo from '@/config/token.js'
// import { setLoginInfo , getLoginInfo} from '@/utils/secret-key'
// import { getLoginProfileInfo } from '@/components/theme-login/store/actionCreator'

import { BackTop, Skeleton } from 'antd';
import JMAppHeader from 'components/app-header';
import JMAppFooter from 'components/app-footer';
import JMAppPlayerBar from './pages/player/app-player-bar';
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
  /* 
    * 初始化登录状态: z每次初始化判断是否存在账号密码
  */

  // // other handle
  // // 初始化
  // const initLogin = () => {
  //   // 存在登录信息
  //   if (localStorage.getItem('loginInfo') != null) {
  //     const {username, password} = getLoginInfo('loginInfo')
  //     username && password? getLoginProfileInfo(username, password): console.log('当前登录的默认信息')
  //   }
  //   // 不存在登录信息
  //   else {
  //     setLoginInfo('loginInfo', initLoginInfo)
  //   }
  // }
  // initLogin()

  // redux hook
  // const dispatch = useDispatch()

  // // other handle
  // // 初始化
  // const initLogin = () => {
  //   // 存在登录信息
  //   if (localStorage.getItem('loginInfo') != null) {
  //     const {username, password} = getLoginInfo('loginInfo')
  //     username && password? dispatch(getLoginProfileInfo(username, password)): console.log('当前登录的默认信息')
  //   }
  //   // 不存在登录信息
  //   else {
  //     setLoginInfo('loginInfo', initLoginInfo)
  //   }
  // }
  // initLogin()

  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        <Suspense fallback={<Skeleton active />}>
          {renderRoutes(routes)}
        </Suspense>
        <JMAppFooter />
        <JMAppPlayerBar />
        {/* 返回顶部 */}
        <BackTop />
      </HashRouter>
    </Provider>
  );
});
