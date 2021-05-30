import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Authentication from '../../../../components/Authentication'
import { changeIsVisible } from '@/components/theme-login/store/index'
import { DayRecommendContent } from './style'
import DateComponent from './c-npns/date-component'
import ThemeHeaderRcm from '@/components/theme-header-rcm/index'

import { formatMinuteSecond } from '@/utils/format-utils.js'
import SongItem from '@/pages/discover/child-pages/toplist/c-cpns/song-item'
import { getRecommendSong } from '../../../../service/song-recommend'

export default memo(function JMAlbum(props) {
  // props/state
  const [recommendPlaylist, setRecommendPlaylist] = useState([])

  // redux hoook
  const dispatch = useDispatch()
  const { isLogin, cookie } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
    cookie: state.getIn(['loginState', 'cookie']),
    
  }))

  // 登录鉴权
  useEffect(() => {
    // console.log(isLogin) 
  }, [isLogin])

  // 获取推荐歌单列表
  useEffect(() => {
    cookie && getRecommendSong(cookie).then((res) => {
      const result = res.data
      setRecommendPlaylist(result.dailySongs)
    })
  }, [cookie])

  // other function
  const toRedirect = useCallback(() => {
    props.history.push('/')
  }, [props.history])
  const showModal = useCallback(() => {
    dispatch(changeIsVisible(true))
  }, [dispatch])

  return (
    <div
      className="w980"
      style={{ border: 'solid 1px #d3d3d3' }}
    >
      {/* 登录鉴权组件 */}
      <Authentication flag={isLogin} to={toRedirect} showModal={showModal} />
      <DayRecommendContent
        className="content"
        style={{ display: isLogin ? 'block' : 'none' }}
      >
        <div className="recommend-cover-bg">
          <DateComponent />
        </div>
        {/* 推荐标题 */}
        <div className="main">
          <ThemeHeaderRcm title="歌曲列表" keywords={['26首']} right showIcon={false} />
          <div className="toplist-main">
        <div className="main-header">
          <div className="sprite_table header-item"></div>
          <div className="sprite_table header-item header-title">标题</div>
          <div className="sprite_table header-item header-time">时长</div>
          <div className="sprite_table header-item header-singer">歌手</div>
        </div>
        <div className="main-list">
          {
            recommendPlaylist && recommendPlaylist.slice(0, 100).map((item,index) => {
              return   <SongItem 
              key={item.id}
              currentRanking={index+1} 
              className="song_item"
              coverPic={index < 3?item.al.picUrl:''}
              duration={formatMinuteSecond(item.dt)}
              songName={item.name}
              singer={item.ar[0].name}
              songId={item.id}
              />
            })
          }
        </div>
      </div>
        </div>
      </DayRecommendContent>
    </div>
  )
})
