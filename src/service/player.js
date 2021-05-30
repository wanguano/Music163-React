import request from './request'

export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  })
}

// /comment/hot?type=0&id=167876
export function getHotComment(id, type = 0) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type,
    },
  })
}

// 歌曲评论
export function getSongComment(id, limit = 20, offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset,
      timestamp: new Date().getTime()
    },
  })
}
/* 
  http://39.102.36.212:3000/comment?t=1&type=0&id=411214279&content=tes&cookie=NMTID=00O1Aa-RYmwaQz6LU3YuZWsXgLlqb4AAAF5MLSJ3Q;%20Max-Age=315360000;%20Expires=Thu,%201%20May%202031%2005:30:08%20GMT;%20Path=/;;__csrf=885d8ef6339aa92d2f4bd3fe717590e6;%20Max-Age=1296010;%20Expires=Tue,%2018%20May%202021%2005:30:18%20GMT;%20Path=/;;__remember_me=true;%20Max-Age=1296000;%20Expires=Tue,%2018%20May%202021%2005:30:08%20GMT;%20Path=/;;MUSIC_U=6989e72bad294ea6fd2c664f0246283405947b73657916bb11563bae416a9ba733a649814e309366;%20Max-Age=1296000;%20Expires=Tue,%2018%20May%202021%2005:30:08%20GMT;%20Path=/;
*/
// 评论歌曲
export function sendSongComment(id, content, cookie) {
  return request({
    url: '/comment',
    method: 'get',
    params: {
      t: 1, // 发送
      type: 0, // 歌曲类型
      id,
      content: content,
      cookie: cookie,
      timestamp: new Date().getTime()
    },
  })
}

// 歌曲评论
export function getSimilaritySong(songid) {
  return request({
    url: '/simi/song',
    params: {
      id: songid,
    },
  })
}