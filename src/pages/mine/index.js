import React, { memo } from 'react'
import { NotLogin } from './style'

export default memo(function JMMine() {
  let isLogin = false
  return (
    <div>
      <NotLogin isLogin={isLogin} className="w980">
        <div className="show-no-login">
          <div className="my_music inner" >
            <h2>登录网易云音乐</h2>
            <div className="my_music btn-login">立即登录</div>
          </div>
        </div>
      </NotLogin>
    </div>
  )
})
