import React, { memo } from 'react'
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from './style'

export default memo(function ThemeHeaderRmc() {
  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <div className="hot-title">
          <i className="icon"></i>
          <a href="/discover/recommend" className="hot-text">热门推荐</a>
        </div>
        <ul className="keywords">
          <li className="item">华语</li>
          <li className="item">| 流行</li>
        </ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>
        <span className="more">更多</span>
      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
})
