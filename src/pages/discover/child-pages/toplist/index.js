import React, { memo, useEffect } from 'react'
import { TopListLeft, TopListRight, TopListWrapper } from './style'
import TopListItem from './c-cpns/top-list-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getToplistInfoAction } from './store/actionCreator'

export default memo(function Toplist() {
  // props/state

  // redux/hook
  const dispatch = useDispatch()
  const { toplistInfo } = useSelector(
    state => ({
      toplistInfo: state.getIn(['toplist', 'toplistInfo']),
    }),
    shallowEqual
  )

  // other hook
  useEffect(() => {
    dispatch(getToplistInfoAction())
  }, [dispatch])

  // other handle
  const firstToplist = toplistInfo.slice(0, 4)
  const lastToplist = toplistInfo.slice(5)

  return (
    <TopListWrapper className="wrap-bg2">
      <div className="content w980">
        <TopListLeft>
          <div className="top-list-container">
            <TopListItem toplistInfo={firstToplist} />
            <TopListItem toplistInfo={lastToplist} top={15} />
          </div>
        </TopListLeft>
        <TopListRight>
          <h2>看心情做φ(゜▽゜*)♪</h2>
        </TopListRight>
      </div>
    </TopListWrapper>
  )
})
