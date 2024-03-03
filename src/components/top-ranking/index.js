import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils.js'

import { Button, message, Popover } from 'antd'
import { TopRankingWrapper } from './style'
import {
  getSongDetailAction,
  changeFirstLoad,
} from '@/pages/player/store/actionCreator'
import { useAddPlaylist } from '../../hooks/change-music'
import { changeCurrentIndexAction } from '../../pages/discover/child-pages/toplist/store/actionCreator'
import { collectionSongToSongList } from '../../service/recommend'
import { getUserSongList } from '../../service/user'

export default memo(function TopRanking(props) {
  // ranking-list排行列表效果需求:
  // 鼠标放到一行item身上hover效果 播放按钮和添加播放列表和收藏的icons
  // props/state
  const [playlistAll, setPlaylistAll] = useState([])
  const { info, index } = props
  const { tracks = [] } = info
  // let localPlayList = [] // 本地存储(暂时不做)

  // redux hook
  const dispatch = useDispatch()
  const { playList, isLogin, userinfo } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      isLogin: state.getIn(['loginState', 'isLogin']),
      userinfo: state.getIn(['loginState', 'profile']),
    }),
    shallowEqual
  )

  // effect
  useEffect(() => {
    // 获取歌单列表
    getUserSongList(userinfo.userId).then((res) => {
      setPlaylistAll(res.playlist)
    })
  }, [userinfo])

  // other handle
  // 播放音乐
  const playMusic = (e, item) => {
    // 阻止超链接跳转
    e.preventDefault()
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item.id))
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false))
    //#region 设置本地存储(暂不做)
    // localPlayList.push(item.id)
    // localStorage.setItem('localPlayList', JSON.stringify(localPlayList))
    //#endregion
  }

  // 添加到播放列表(使用自定义hook)
  const addPlaylist = useAddPlaylist(playList, message)

  // function
  const toLink = (e) => {
    e.preventDefault()
    dispatch(changeCurrentIndexAction(index))
    props.to.push(`/discover/ranking?id=${info.id}`)
  }

  // 收藏歌曲: 展示收藏歌曲列表
  const collectionSong = (e, id, playlistid) => {
    e.preventDefault()
    // 判断用户是否登录
    !isLogin && message.warning('请先登录')
    // 登录状态
    if (isLogin) {
      collectionSongToSongList(playlistid, id).then((res) => {
        if (res.status === 200) {
          message.success('收藏成功')
        } else {
          message.error('收藏失败: 只能收藏到自己创建的歌单哦~')
        }
      })
    }
  }

  // 歌单列表（登录状态下）
  const content = (songId) => {
    if (isLogin) {
      return (
        <div className="play-wrapper">
          {playlistAll &&
            playlistAll.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-space-between playlist-item"
                >
                  <div className="playlist-name">{item.name}</div>
                  <Button
                    type="default"
                    size="small"
                    onClick={(e) => collectionSong(e, songId, item.id)}
                  >
                    收藏到此歌单
                  </Button>
                </div>
              )
            })}
        </div>
      )
    } else {
      return '当前用户没有登录u'
    }
  }

  return (
    <TopRankingWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <div className="image_cover ">{info.name}</div>
        </div>
        <div className="tit">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            {/* <a
              href="/discover/recommend"
              className="no-link sprite_02 text-indent play"
            >
              播放
            </a>
            <a
              href="/discover/recommend"
              className="no-link sprite_02 text-indent favourite"
            >
              收藏
            </a> */}
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="number">{index + 1}</div>
                <a
                  href="/play"
                  className="song-name text-nowrap"
                  onClick={(e) => playMusic(e, item)}
                >
                  {item.name}
                </a>
                <div className="oper">
                  <a
                    href="/discover/recommend"
                    className="sprite_02 btn play"
                    onClick={(e) => playMusic(e, item)}
                  >
                    {item.name}
                  </a>
                  <a
                    href="/discover/recommend"
                    className="sprite_icon2 btn addto"
                    onClick={(e) => addPlaylist(e, item.id)}
                  >
                    {item.name}
                  </a>
                  <Popover
                    placement="topRight"
                    title={content(item.id)}
                    trigger="click"
                  >
                    <a href="/play" className="sprite_02 btn favourite">
                      {item.name}
                    </a>
                  </Popover>
                </div>
              </div>
            )
          })}
      </div>
      <div className="ranking-footer">
        <a href="/all" className="show-all" onClick={(e) => toLink(e)}>
          查看全部&gt;
        </a>
      </div>
    </TopRankingWrapper>
  )
})
