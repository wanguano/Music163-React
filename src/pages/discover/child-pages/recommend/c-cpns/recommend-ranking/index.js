import React, { memo, useEffect } from 'react'

import ThemeHeaderRcm from 'components/theme-header-rcm'
import { RankingWrapper } from './style'
import { useDispatch } from 'react-redux';
import { getTopListAction } from '../../store/actionCreator';

export default memo(function RecommendRanking() {
  // state/props

  // redux hook
  const dispatch = useDispatch()

  

  // other hook
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <h2>榜单组件</h2>
    </RankingWrapper>
  )
})
