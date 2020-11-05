import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getQueryStringObj } from '@/utils/format-utils'
import { getSearchSongListAction } from './store/actionCreator'
import { useChangeDropBoxState } from '@/hooks/change-state'
import { searchCategories } from '@/common/local-data'

import { Input } from 'antd'
import { SearchWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function JMSearch(props) {
  // props/state
  const { route } = props
  const [searchSongName, setSongName] = useState(null)

  // redux hook
  const dispatch = useDispatch()
  const { searchSongList } = useSelector(
    (state) => ({
      searchSongList: state.getIn(['search', 'searchSongList']),
    }),
    shallowEqual
  )

  // (获取queryString传递歌曲名字)
  const queryString = props.location.search
  let songName = decodeURIComponent(
    queryString && getQueryStringObj(queryString).song
  )

  // other hook
  // (判断是否传递queryString)
  useEffect(() => {
    // 没有传递queryString
    if(!queryString) props.history.push('/discover')
  }, [props,queryString])
  // (组件渲染更新歌曲名字)
  useEffect(() => {
    setSongName(songName)
  }, [songName])
  // (根据歌曲名字发送网络请求)
  useEffect(() => {
    // 传递queryString: 发送网络请求
    if(queryString) dispatch(getSearchSongListAction(songName, 20))
  }, [songName, dispatch, queryString])
  
  // other handle
  const { Search } = Input
  

  return (
    <SearchWrapper onClick={useChangeDropBoxState()}>
      <div className="w980 content">
        <div className="search-wrapper">
          <Search
            value={searchSongName}
            style={{ width: 490 }}
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>
        <div className="search-content">
          <div className="search-info">
            搜索"{songName}", 找到<span className="music-amount"> {searchSongList.length} </span>单曲
          </div>
          <div className="m-tab search-category">
            {
              searchCategories.map((item) => {
                return (
                  <NavLink key={item.link} to={{pathname: item.link, search: queryString}} className="route-item m-tab" activeClassName="active">
                    <em>{item.title}</em>
                  </NavLink>
                ) 
              })
            }
          </div>
          {renderRoutes(route.routes)}
        </div>
      </div>
    </SearchWrapper>
  )
})
