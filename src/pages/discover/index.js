import React, { memo } from 'react'
import { HeaderCategory } from './style'

import AppNavBar from '@/components/nav-bar'
import initLoginInfo from '@/config/token.js'
import { setLoginInfo , getLoginInfo} from '@/utils/secret-key'
import { getLoginProfileInfo } from '@/components/theme-login/store/actionCreator'

import { renderRoutes } from 'react-router-config'
import { useChangeDropBoxState , useGlobalKeyboardEvent} from '@/hooks/change-state'
import { useDispatch } from 'react-redux'

export default memo(function JMDiscover(props) {
  // props/state
  const { route } = props

  // custom hook
  useGlobalKeyboardEvent()// 全局注册 ctrl+k 唤醒下拉框

  // redux hook
  const dispatch = useDispatch()

  // other handle
  // 初始化
  const initLogin = () => {
    // 存在登录信息
    if (localStorage.getItem('loginInfo') != null) {
      const {username, password} = getLoginInfo('loginInfo')
      username && password? dispatch(getLoginProfileInfo(username, password)): console.log('当前登录的默认信息')
    }
    // 不存在登录信息
    else {
      setLoginInfo('loginInfo', initLoginInfo)
    }
  }
  initLogin()

  return (
    <HeaderCategory onClick={useChangeDropBoxState()}>
      {/* 导航栏 */}
      <AppNavBar  />
      {renderRoutes(route.routes)}
    </HeaderCategory>
  )
})
