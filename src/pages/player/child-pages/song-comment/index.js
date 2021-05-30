import React, {
  memo,
  useEffect,
  useState,
  createElement,
  useCallback,
} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Comment, Tooltip, Avatar, message } from 'antd'
import { LikeFilled, LikeOutlined } from '@ant-design/icons'
// import { Pagination } from 'antd'
import HYPagination from '@/components/pagination/index'
import ThemeHeader from '@/components/theme-header'
import { SoNewWrapper, SongCommentWrapper, WonderfulWrapper } from './style'
import { changeCurrentCommentTotal, getHotCommentAction } from '../../store/actionCreator'
import { changeIsVisible } from '@/components/theme-login/store/index'
import { sendSongComment } from '@/service/player'
import { getCount } from '../../../../utils/format-utils'
import { getSongComment } from '@/service/player'
import ThemeComment from '../../../../components/theme-comment'
import { sendLikeComment } from '../../../../service/songs'

function SongComment() {
  // props/state
  const [songComment, setSongComment] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [flag, setFlag] = useState(false)
  const [liked, setLiked] = useState([]) // 歌曲的点赞状态
  // const [total, setTotal] = useState(0)

  // redux hook
  const dispatch = useDispatch()
  const {
    hotComments,
    currentSongId,
    isLogin,
    cookie,
    avatarUrl,
  } = useSelector(
    (state) => ({
      hotComments: state.getIn(['player', 'hotComments']),
      currentSongId: state.getIn(['player', 'currentSong', 'id']),
      isLogin: state.getIn(['loginState', 'isLogin']),
      cookie: state.getIn(['loginState', 'cookie']),
      avatarUrl: state.getIn(['loginState', 'profile', 'avatarUrl']),
    }),
    shallowEqual
  )

  // other hooks
  useEffect(() => {
    dispatch(getHotCommentAction(currentSongId))
    getSongComment(currentSongId).then((res) => {
      setSongComment(res.comments)
      // console.log(res)
      setTotal(res.total)
      dispatch(changeCurrentCommentTotal(res.total))
      // likedArr.push(res)
      // setTotal(res.total)
    })
  }, [dispatch, currentSongId])

  // other handle
  function formatDate(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000) // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ')
  }
  // 点赞评论
  const likeComment = (index, data) => {
    // if (liked[index].count >= 1) return
    // 登录鉴权
    if(!isLogin) { // 没登陆
      dispatch(changeIsVisible(true))
    }
    if (!flag) {
      liked[index].liked = true
      liked[index].count += 1
      setLiked(liked)
      /* 调点赞接口 */
      // console.log(data)
      sendLikeComment(currentSongId,data.commentId,1, cookie).then((res) => {
        console.log('res :>>>', res)
        // if(res.message !== 'exist') message.success('以点赞过啦')
        // else message.success('点赞成功')
        if(res.code === 200) message.success('点赞成功')
        else message.success('请稍后再试')
      })
    } else {
      liked[index].liked = false
      liked[index].count -= 1
      setLiked(liked)
      setFlag(true)
      /* 调取消点赞接口 */
      // console.log('disliked')
      /* 调取消点赞赞接口 */
      sendLikeComment(data.commentId,0, cookie).then((res) => {
        if(res.code === 200) message.success('取消点赞成功')
        else message.success('取消点赞成功')
      })
    }
    setFlag(!flag)
  }

  // 分页
  const changePage = useCallback(
    (currentPage) => {
      setCurrentPage(currentPage)
      // offset=(当前页数-1)*limit
      const targePageCount = (currentPage - 1) * 20
      getSongComment(currentSongId, 20, targePageCount).then((res) => {
        setSongComment(res.comments)
        setTotal(res.total)
      })
    },
    [currentSongId]
  )

  // template html action
  // 点赞HTML
  const getLikeTemplateAction = (item, index) => {
    liked.push({
      liked: item.liked,
      count: item.likedCount,
    })
    // console.log('item, index :>>>', item, index)
    return [
      <Tooltip key="comment-basic-like" title="Like" className="comment-like">
        <span onClick={() => likeComment(index, item)}>
          {createElement(
            liked[index].liked === true ? LikeFilled : LikeOutlined
          )}
          <span className="comment-action">{getCount(liked[index].count)}</span>
        </span>
      </Tooltip>,
    ]
  }
  // 评论歌曲校验(获取焦点)
  const commentSongcheckout = () => {
    // 没登录
    if (!isLogin) dispatch(changeIsVisible(true))
  }

  // 评论成功
  const commentCallbackOk = (value) => {
    sendSongComment(currentSongId, value, cookie).then((res) => {
      if(res.code === 200) message.success('评论成功').then(() => {
        getSongComment(currentSongId).then((res) => {
          setSongComment(res.comments)
          setTotal(res.total)
        })
      })
    })
  }

  return (
    <SongCommentWrapper>
      <ThemeHeader title="评论" />
      {/* 评论内容 */}
      <ThemeComment
        onFocus={() => commentSongcheckout()}
        callbackOk={(value) => commentCallbackOk(value)}
        isLogin={isLogin}
        photo={avatarUrl}
      />
      {/* 精彩评论 */}
      <WonderfulWrapper>
        <div className="header-comment">精彩评论</div>
        {hotComments &&
          hotComments.map((item, index) => {
            return (
              <Comment
                // actions={getLikeTemplateAction(item, index)}
                key={item.commentId}
                author={item.user.nickname}
                avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
                content={<p>{item.content}</p>}
                datetime={
                  <Tooltip title={formatDate(item.time)}>
                    {formatDate(item.time).slice(
                      0,
                      formatDate(item.time).indexOf(' ')
                    )}
                  </Tooltip>
                }
              />
            )
          })}
      </WonderfulWrapper>
      {/* 最新评论 */}
      <SoNewWrapper>
        <div className="header-comment">最新评论</div>
        {songComment &&
          songComment.map((item, index) => {
            return (
              <Comment
                actions={getLikeTemplateAction(item, index)}
                key={item.commentId}
                author={item.user.nickname}
                avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
                content={<p>{item.content}</p>}
                datetime={
                  <Tooltip title={formatDate(item.time)}>
                    {formatDate(item.time).slice(0, formatDate(item.time))}
                  </Tooltip>
                }
              />
            )
          })}
      </SoNewWrapper>
      {/* 分页 */}
      <HYPagination
        currentPage={currentPage}
        pageSize={20}
        total={total}
        onPageChange={(currentPage) => changePage(currentPage)}
      />
    </SongCommentWrapper>
  )
}

export default memo(SongComment)
