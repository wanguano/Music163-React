import React, { memo } from 'react'
import { NotLoginWrapper } from './style'

export default memo(function JMFriend() {
  // isLogin 是否登录
  let isLogin = false

  return (
    <div>
      <NotLoginWrapper isLogin={isLogin} className="not-login w980">
        <h2>关注明星发现精彩</h2>
      </NotLoginWrapper>
    </div>
  )
})
