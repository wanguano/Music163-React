import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'query-string'

import { TopListLeft, TopListRight, TopListWrapper } from './style'
import TopListItem from './c-cpns/top-list-item'
import ToplistTitle from './c-cpns/toplist-title'
import ToplistMain from './c-cpns/toplist-main'
import {
  getToplistTitleInfoAction,
  getToplistInfoAction,
} from './store/actionCreator'

export default memo(function Toplist(props) {
  // redux/hook
  const dispatch = useDispatch()
  const { toplistInfo, currentToplistId } = useSelector(
    (state) => ({
      toplistInfo: state.getIn(['toplist', 'toplistInfo']),
      currentToplistId: state.getIn(['toplist', 'currentToplistId']),
    }),
    shallowEqual
  )

  // other hook
  useEffect(() => {
    // 榜单item
    dispatch(getToplistInfoAction())
  }, [dispatch])

  // 排行榜头部信息
  useEffect(() => {
    // 派发榜单标题信息Action
    let { id } = qs.parse(props.location.search)
    id = id ? id : currentToplistId
    dispatch(getToplistTitleInfoAction(id))
  }, [currentToplistId, dispatch, props])

  return (
    <TopListWrapper className="wrap-bg2">
      <div className="content w980">
        <TopListLeft>
          <div className="top-list-container">
            <TopListItem toplistInfo={toplistInfo} history={props.history} />
          </div>
        </TopListLeft>
        <TopListRight>
          <ToplistTitle />
          <ToplistMain />
        </TopListRight>
      </div>
    </TopListWrapper>
  )
})
