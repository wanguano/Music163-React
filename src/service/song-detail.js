import request from './request'

// 歌曲详情网络请求
export function getSongDeatilData(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}