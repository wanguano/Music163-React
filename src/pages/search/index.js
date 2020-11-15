import React, { memo, useState, useEffect } from 'react'

import qs from 'query-string'
import { useChangeDropBoxState } from '@/hooks/change-state'
import { searchCategories } from '@/common/local-data'

import { Input } from 'antd'
import { SearchWrapper } from './style'
import { NavLink, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function JMSearch(props) {
  // props/state
  const { route } = props
  const [searchSongName, setSearchSongName] = useState(null)// 搜索歌曲名字
  const [activeIndex, setActiveIndex] = useState(null)// 控制导航item的active

  // other handle
  const { Search } = Input
  const { song } = qs.parse(props.location.search)

  // other hooks
  // (组件渲染更新歌曲名字)
  useEffect(() => {
    setSearchSongName(song)
    // eslint-disable-next-line
  }, [])

  // (本次存储索引: NavLink选中状态的索引)
  useEffect(() => {
    // 判断本地存储是否包含key: activeIndex
    !localStorage.hasOwnProperty('activeIndex') &&
      localStorage.setItem('activeIndex', 0)
    const activeIndex = JSON.parse(localStorage.getItem('activeIndex'))
    setActiveIndex(activeIndex)
  }, [])

  // 更新activeIndex索引时保存本地存储
  useEffect(() => {
    localStorage.setItem('activeIndex', JSON.stringify(activeIndex))
  }, [activeIndex])

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
            {searchCategories.map((item, index) => {
              return (
                <NavLink
                  key={item.link}
                  to={{ pathname: item.link + `&song=${song}` }}
                  className={`route-item m-tab ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {activeIndex === index?<Redirect to={item.link + `&song=${searchSongName}`} />:null}
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
