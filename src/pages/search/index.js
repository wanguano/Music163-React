import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getQueryStringObj } from '@/utils/format-utils'
import { getSearchSongListAction } from './store/actionCreator'
import { useChangeDropBoxState } from '@/hooks/change-state'

import { Input } from 'antd';
import { SearchWrapper } from './style'

export default memo(function JMSearch(props) {
  // props/state
  // 获取queryString传递歌曲名字
  const songName = decodeURIComponent(
    getQueryStringObj(props.location.search).song
  )
  const { Search } = Input;

  // redux hook
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    // 发送歌曲名字网络请求
    dispatch(getSearchSongListAction(songName, 20))
  }, [songName, dispatch])

  return (
    <SearchWrapper onClick={useChangeDropBoxState()}>
      <div className="w980 content">
        <div className="search-wrapper">
          <Search placeholder="search you favorite music"  style={{ width: 490 }} />
        </div>
      </div>
    </SearchWrapper>
  )
})
