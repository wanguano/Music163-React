import request from './request';

export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  });
}

// /comment/hot?type=0&id=167876
export function getHotComment(id, type = 0) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type,
    },
  });
}
