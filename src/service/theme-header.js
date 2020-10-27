import request from './request';

export function getSearchSongData(keywords, limit = 6, type = 1) {
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      type,
    },
  });
}
