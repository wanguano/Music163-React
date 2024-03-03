import ThemeLogin from '@/components/theme-login'
import React, { memo } from 'react'
import { NotLogin } from './style'
import { changeIsVisible } from '@/components/theme-login/store'
import { useDispatch, useSelector } from 'react-redux'
const JMUser = React.lazy(() => import('@/pages/profile'))

export default memo(function JMMine() {
  // let isLogin = false

  const { isLogin } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
  }))

  // dispath
  const dispatch = useDispatch()
  // jsx
  const user = isLogin ? (
    <JMUser />
  ) : (
    <NotLogin isLogin={isLogin} className="w980">
      <div className="show-no-login">
        <div className="my_music inner">
          <h2>登录网易云音乐</h2>
          <div
            className="my_music btn-login"
            onClick={() => dispatch(changeIsVisible(true))}
          >
            立即登录
          </div>
          <ThemeLogin />
        </div>
      </div>
    </NotLogin>
  )

  return <div>{user}</div>
})
