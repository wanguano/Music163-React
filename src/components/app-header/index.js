import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

export default memo(function JMAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content w1100">
        <HeaderLeft>
          <h1><a href="#/" className="logo sprite_01">网易云音乐</a></h1>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="red-line"></div>
    </HeaderWrapper>
  )
})
