import React, { memo } from 'react'
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from './style'

export default memo(function ThemeHeaderRmc() {
  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <div className="title">
          <div className="icon"></div>
        </div>
        <ul className="keyword"></ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>

      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
})
