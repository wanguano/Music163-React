import React, { memo, useState, useEffect } from 'react'

import qs from 'query-string'
import { useChangeDropBoxState } from '@/hooks/change-state'
import { searchCategories } from '@/common/local-data'

import { Input } from 'antd'
import { SearchWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function JMSearch(props) {
  // props/state
  const { route } = props
  const [searchSongName, setSearchSongName] = useState(null)

  // redux hook
  // const dispatch = useDispatch()
  // const { songListLength } = useSelector(
  //   (state) => ({
  //     songListLength: state.getIn(['search', 'singleSongList', 'length']),
  //   }),
  //   shallowEqual
  // )

  // other handle
  const { Search } = Input
  const { song } = qs.parse(props.location.search)

  // other hook
  // (判断是否传递queryString)
  useEffect(() => {
    // 没有传递搜索歌曲名字,重定向到推荐页
    if (!song) props.history.push('/discover')
  }, [song, props])
  
  // (组件渲染更新歌曲名字)
  useEffect(() => {
    setSearchSongName(song)
  }, [song])


  return (
    <SearchWrapper onClick={useChangeDropBoxState()}>
      <div className="w980 content">
        <div className="search-wrapper">
          <Search
            value={searchSongName}
            style={{ width: 490 }}
            onChange={(e) => setSearchSongName(e.target.value)}
          />
        </div>
        <div className="search-content">
          <div className="search-info">
            搜索"{song}", 找到
            <span className="music-amount"> 20 </span>单曲
          </div>
          <div className="m-tab search-category">
            {searchCategories.map((item) => {
              return (
                <NavLink
                  key={item.link}
                  to={{ pathname: item.link + `&song=${song}` }}
                  className="route-item m-tab"
                  activeClassName="active"
                >
                  <em>{item.title}</em>
                </NavLink>
              )
            })}
          </div>
          {renderRoutes(route.routes)}
        </div>
      </div>
    </SearchWrapper>
  )
})
