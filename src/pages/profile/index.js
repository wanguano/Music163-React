import {
  ManOutlined,
  PlayCircleOutlined,
  WomanOutlined,
} from '@ant-design/icons'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeRecommendRcm from '@/components/theme-header-rcm'
import Authentication from '../../components/Authentication'
import SongCover from '@/components/song-cover'
import {
  getUserSongList,
  setCreateUserSongList,
} from '@/service/user'
import { changeIsVisible } from '../../components/theme-login/store/actionCreator'
import { getCity, getSizeImage } from '../../utils/format-utils'
import { ProfileWrapper } from './style'
import Modal from 'antd/lib/modal/Modal'
import { Input, message } from 'antd'

export default memo(function Profile(props) {
  // props/state
  const [playlist, setPlaylist] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [playlistName, setPlaylistName] = useState('')

  // redux
  const dispatch = useDispatch()
  const { isLogin, userinfo, cookie } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
    userinfo: state.getIn(['loginState', 'profile']),
    cookie: state.getIn(['loginState', 'cookie']),
  }))

  // handle constant
  const userPic =
    userinfo && userinfo.avatarUrl && getSizeImage(userinfo.avatarUrl, 180)
  const vip = userinfo && userinfo.vipType
  const nickname = userinfo && userinfo.nickname
  const gender = userinfo && userinfo.gender === 1 ? 'man' : 'woman'
  const dynamic = [
    {
      name: '动态',
      value: userinfo && userinfo.authStatus,
    },
    {
      name: '关注',
      value: userinfo && userinfo.follows,
    },
    {
      name: '粉丝',
      value: userinfo && userinfo.followeds,
    },
  ]
  const signature = userinfo && userinfo.signature
  const city = userinfo && userinfo.city && getCity(userinfo.city)
  const songlistCount = userinfo && userinfo.playlistCount
  const userId = userinfo && userinfo.userId

  // other hook
  useEffect(() => {
    getUserSongList(userId).then((res) => {
      setPlaylist(res.playlist)
    })
  }, [userId])
  // handle
  const toRedirect = useCallback(() => {
    props.history.push('/')
  }, [props.history])

  const showModal = useCallback(() => {
    dispatch(changeIsVisible(true))
  }, [dispatch])

  // modal function
  const showModalDom = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    setCreateUserSongList(playlistName, cookie).then((res) => {
      if (res.code === 200) {
        message.success('创建成功😉').then(() => {
          window.location.reload()
        })
      }
    })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  // template
  const renderDynamicList = () => {
    return dynamic.map((item) => {
      return (
        <div className="dynamic-item" key={item.name}>
          <strong className="count">{item.value}</strong>
          <span>{item.name}</span>
        </div>
      )
    })
  }

  const renderCreatePlaylist = () => {
    return (
      <span className="creator" onClick={showModalDom}>
        创建歌单
      </span>
    )
  }

  return (
    <ProfileWrapper className="content">
      {/* 登录鉴权组件 */}
      <Authentication flag={isLogin} to={toRedirect} showModal={showModal} />
      <div className="user-info flex">
        <div className="user-pic">
          <img src={userPic} alt="" />
        </div>
        <div className="user-detail">
          <div className="nickname-wrap">
            <h3 className="nickname gap">{nickname}</h3>
            <span className="icon-small lev">
              {vip}
              <i className="icon-small"></i>
            </span>
            <div className="gender-icon">
              {gender === 'man' ? (
                <ManOutlined className="gender-icon man" />
              ) : (
                <WomanOutlined className="gender-icon" color="#e60026" />
              )}
            </div>
          </div>
          <div className="dynamic-wrap flex">{renderDynamicList()}</div>
          <div className="recommend">个人介绍：{signature}</div>
          <div className="address">所在地区：{city}</div>
        </div>
      </div>
      <div className="song-list">
        <ThemeRecommendRcm
          title={`我的歌单(${songlistCount})`}
          right={renderCreatePlaylist()}
          showIcon={true}
        />
        <div className="playlist flex">
          {playlist &&
            playlist.map &&
            playlist.map((item) => {
              return <SongCover info={item} key={item.id} />
            })}
        </div>
      </div>
      <Modal
        title="创建歌单"
        okText="确认"
        cancelText="取消"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="请输入歌单"
          prefix={<PlayCircleOutlined />}
          value={playlistName}
          onInput={({ target }) => setPlaylistName(target.value)}
        />
      </Modal>
    </ProfileWrapper>
  )
})
