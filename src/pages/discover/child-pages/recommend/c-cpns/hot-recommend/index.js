import React, { memo, useEffect } from 'react'

import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

import {
  HotRecommendWrapper,
} from './style'
import ThemeHeaderRmc from 'components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHostBannersAction } from '../../store/actionCreator'

export default memo(function HotRecommend() {
  // state
  
  // redux 
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  
  // other hooks
  useEffect(() => {
    dispatch(getHostBannersAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRmc  title="热门推荐" keywords={['华语','流行','摇滚','民谣','电子']}  />
      {
        hotRecommends.map((item) => {
          return (
            <div className="recommend-list">{item.name}</div>
          )
        })
      }
    </HotRecommendWrapper>
  )
})
