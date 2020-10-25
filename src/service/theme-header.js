import request from './request'

export function getSearchSongData(keywords,limit=5,type=1) {
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      type
    }
  })
}