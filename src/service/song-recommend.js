import request from './request'
export function getRecommendSong(cookie) {
  return request({
    url: '/recommend/songs',
    method: 'get',
    params: {
      cookie: cookie
    }
  })
}
