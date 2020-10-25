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