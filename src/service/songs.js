import request from './request'

// 获取歌单列表
export function getSongList(limit,offset=0) {
  return request({
    url:'/top/playlist',
    params: {
      limit,
      offset
    }
  })
}

export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

export function getSongCategoryList(cat="全部", offset=0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

// 点赞
/* cid : 评论 id
t : 是否点赞 ,1 为点赞 ,0 为取消点赞 */
export function sendLikeComment(id, cid, t, cookie) {
  return request({
    url: "/comment/like",
    params: {
      id,
      cid,
      t,
      type: 0,
      cookie
    }
  })
}

/* 收藏歌单, 传递歌单id */
export function sendCollectSonglist(id, cookie) {
  return request({
    url: "/playlist/subscribe",
    params: {
      t: 1,
      id,
      cookie
    }
  })
}
