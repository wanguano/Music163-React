import React, { memo } from 'react'
import { UserLoginWrapper } from './style'
import { changeIsVisible } from '@/components/theme-login/store'
import { useDispatch, useSelector } from 'react-redux'

export default memo(function UserLogin() {
  // redux
  const dispatch = useDispatch()
  const { isLogin } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
  }))
  // handle function
  const handleLogin = () => {
    if (!isLogin) dispatch(changeIsVisible(true))
  }
  return (
    <UserLoginWrapper style={{ display: isLogin ? 'none' : 'block' }}>
      <div className="profile-info sprite_02">
        <p className="login-detail">
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </p>
        <button className="user-login sprite_02" onClick={() => handleLogin()}>
          用户登录
        </button>
      </div>
    </UserLoginWrapper>
  )
})
