import React, { memo, useEffect } from 'react'

import ThemeHeaderRcm from 'components/theme-header-rcm'
import TopList from 'components/top-ranking'
import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreator'

export default memo(function RecommendRanking() {
  // state/props

  // redux hook
  const { upRanking = [], originRanking = [], newRanking = [] } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
    newRanking: state.getIn(['recommend', 'newRanking'])
  }), shallowEqual)
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
      <div className="ranking-info">
        <TopList info={originRanking} />
        <TopList info={upRanking} />
        <TopList info={newRanking} />
      </div>
    </RankingWrapper>
  )
})
