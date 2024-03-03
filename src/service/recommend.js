import request from './request'

export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

// 首页下的新碟上架
export function getNewAlbums() {
  return request({
    url: '/album/newest',
  })
}

// 入驻歌手
export function getSettleSinger(limit) {
  return request({
    url: '/artist/list',
    params: {
      limit,
    },
  })
}

// 收藏歌曲到歌单
export function collectionSongToSongList(pid, tracks, op = 'add') {
  return request({
    url: '/playlist/tracks',
    params: {
      op,
      pid,
      tracks,
    },
  })
}
