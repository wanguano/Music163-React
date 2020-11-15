import React, { memo, useEffect } from 'react'

import qs from 'query-string'

import SingerItem from './c-cpns/singer-item'
import { JMSingerWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSearchSingerListAction } from '../../store/actionCreator'

export default memo(function JMSinger(props) {
  // props/state
  const { type, song } = qs.parse(props.location.search)

  // redux hook
  const dispatch = useDispatch()
  const { singerList } = useSelector(
    (state) => ({
      singerList: state.getIn(['search', 'singerList']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getSearchSingerListAction(song, 20, type))
  }, [dispatch, song, type])

  return (
    <JMSingerWrapper>
      {singerList &&
        singerList.map((item) => {
          return (
            <SingerItem
              key={item.id}
              coverPic={item.picUrl}
              singer={item.name}
            />
          )
        })}
    </JMSingerWrapper>
  )
})
