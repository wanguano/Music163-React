import React, { memo } from 'react'
import { Content, RecommendLeft, RecommendRight, RecommendWrapper } from './styled'

export default memo(function HotRecommend() {
  return (
    <RecommendWrapper>
      <Content className="w980">
        <RecommendLeft>HotRecommend</RecommendLeft>
        <RecommendRight>RecommendRight</RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
