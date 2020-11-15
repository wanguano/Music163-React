import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'query-string'
import { getSearchSongListAction } from '../../store/actionCreator'
import { formatMinuteSecond } from '@/utils/format-utils'

import { SingleSongWrapper } from './style'
import SingleSongItem from './c-cpns/single-song-item'

export default memo(function JMSingle(props) {
  // props/state
  const { song, type } = qs.parse(props.location.search)

  // redux hook
  const dispatch = useDispatch()
  const { singleSongList } = useSelector(
    (state) => ({
      singleSongList: state.getIn(['search', 'singleSongList']),
    }),
    shallowEqual
  )

  // other hook
  // (根据歌曲名字发送网络请求)
  useEffect(() => {
    // 传递歌曲发送网络请求
    if (song) dispatch(getSearchSongListAction(song, 20, type))
  }, [dispatch, song, type, props])

  return (
    <SingleSongWrapper>
      {singleSongList && singleSongList.map((item) => {
        return (
          <SingleSongItem
            key={item.id}
            songId={item.id}
            songName={item.name}
            singer={item.artists[0].name}
            album={item.album.name}
            duration={formatMinuteSecond(item.duration)}
          />
        )
      })}
    </SingleSongWrapper>
  )
})
