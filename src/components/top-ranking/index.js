import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils.js'

import { TopRankingWrapper } from './style'
import { getSongDetailAction,changeFirstLoad } from '@/pages/player/store/actionCreator'

export default memo(function TopRanking(props) {
  // ranking-list排行列表效果需求:
  // 鼠标放到一行item身上显示 播放按钮和添加播放列表和收藏的icons
  // props/state
  const { info } = props
  const { tracks = [] } = info

  // redux hook
  const dispatch = useDispatch()

  // other handle
  const playMusic = (e,item) => {
    // 阻止超链接跳转
    e.preventDefault()
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item.id))
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false))
  }

  return (
    <TopRankingWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover ">
            {info.name}
          </a>
        </div>
        <div className="tit">
          <a href="/todo">
            <h3>{info.name}</h3>
          </a>
          <div className="btn">
            <a href="/todo" className="sprite_02 text-indent play">
              播放
            </a>
            <a href="/todo" className="sprite_02 text-indent favourite">
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks && tracks.length > 0 && tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="number">{index + 1}</div>
              <a href="/todo" className="song-name text-nowrap">{item.name}</a>
              <div className="oper">
                <a href="/todo" className="sprite_02 btn play" onClick={e => playMusic(e,item)}>{item.name}</a>
                <a href="/todo" className="sprite_icon2 btn addto">{item.name}</a>
                <a href="/todo" className="sprite_02 btn favourite">{item.name}</a>
              </div>
            </div>
          )
        }) }
      </div>
      <div className="ranking-footer">
        <a href="/all" className="show-all">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
