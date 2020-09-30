import React, { memo } from 'react'

import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
} from './styled'
import ThemeHeaderRmc from 'components/theme-header-rcm'

export default memo(function HotRecommend() {
  return (
    <RecommendWrapper>
      <Content className="w980">
        <RecommendLeft>
          <ThemeHeaderRmc />
        </RecommendLeft>
        <RecommendRight>RecommendRight</RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
