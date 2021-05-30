import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage, parseTime } from '@/utils/format-utils'
import { HeaderTitle, MainDetail, SongDetailLeftWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { changeIsVisible } from '@/components/theme-login/store/actionCreator'
import ThemePlayist from '@/components/theme-playlist'
import { message, Skeleton, Tag } from 'antd'
import { sendCollectSonglist } from '../../../../service/songs'

export default memo(function SongDetailLeft() {
  // props/state

  // redux
  const dispatch = useDispatch()
  const { songDetail, isLogin, cookie } = useSelector(
    (state) => ({
      songDetail: state.getIn(['songDetail', 'songDetailInfo', 'playlist']),
      isLogin: state.getIn(['loginState', 'isLogin']),
      cookie: state.getIn(['loginState', 'cookie']),
    }),
    shallowEqual
  )
  // console.log('songDetail :>>>', songDetail)
  // handle constant
  const coverPicUrl = songDetail && songDetail.coverImgUrl
  const headerTitle = songDetail && songDetail.name
  const avatarPic =
    songDetail &&
    songDetail.creator &&
    songDetail.creator.avatarUrl &&
    getSizeImage(songDetail.creator.avatarUrl, 35)
  const avatarName =
    songDetail && songDetail.creator && songDetail.creator.nickname
  const avatarDatetime =
    songDetail &&
    songDetail.createTime &&
    parseTime(songDetail.createTime, '{y}-{m}-{d}')
  const labelsArr = songDetail && songDetail.tags
  const description = songDetail && songDetail.description
  const playCount = songDetail && songDetail.playCount
  const playlist = songDetail && songDetail.tracks

  // other handle
  const collectSonglist = useCallback(() => {
    if(isLogin) {
      // 收藏歌单接口
      sendCollectSonglist(songDetail.id, cookie).then((res) => {
        if (res.code === 200) message.success('收藏成功')
        console.log('res :>>>', res)
      })
    } else {
      dispatch(changeIsVisible(true))
    }
  }, [isLogin, dispatch, cookie, songDetail])

  // template
  const renderTags = () => {
    return (
      labelsArr &&
      labelsArr.map((value) => {
        return (
          <Tag color="#de021d" key={value}>
            {value}
          </Tag>
        )
      })
    )
  }

  const renderRightSlot = (
    <span>
      播放：<em style={{ color: '#c20c0c' }}>{playCount}</em>次
    </span>
  )

  return (
    <SongDetailLeftWrapper>
      {!songDetail && <Skeleton active />}
      {/* 歌单详情头部 */}
      <HeaderTitle className="flex">
        <div className="conver-img">
          <img src={getSizeImage(coverPicUrl, 200)} alt="" />
          <span className="image_cover"></span>
        </div>
        <div className="song-detail">
          <div className="detail-title-wrapper">
            <i className="icons"></i>
            <h2 className="detail-title">{headerTitle}</h2>
          </div>
          <div className="avatar">
            <div className="avatar-pic">
              <img src={avatarPic} alt="" />
            </div>
            <div className="avatar-name">{avatarName}</div>
            <div className="avatar-datetime">{avatarDatetime}创建</div>
          </div>
          <div className="label-warpper flex gap">
            <span>标签: </span>
            {renderTags()}
            <div className="sprite_button favorite pointer" style={{marginBottom: '5px'}} onClick={() => collectSonglist()}>
              <i className="sprite_button inner">
                <em className="sprite_button favorite-icon"></em>
                收藏歌单
              </i>
            </div>
          </div>
          <div className="description-info gap">
            <div className="descript-detail">介绍: {description}</div>
          </div>
        </div>
      </HeaderTitle>
      {/* 歌单详情音乐列表 */}
      <MainDetail>
        <ThemeHeaderRcm
          className="gap"
          title="歌曲列表"
          showIcon={false}
          right={renderRightSlot}
        />
        {playlist && <ThemePlayist playlist={playlist} />}
      </MainDetail>
    </SongDetailLeftWrapper>
  )
})
