/**
 * 本地存储添加歌曲id,如果存在就不再添加
 * @param {Number} id 歌曲id
 * @param {String} key 本地存储key
 */
export function addPlaylistId(id, key = 'playlistId') {
  const songListId = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
  if (songListId.includes(id)) {
    // 本地存储保存不再重复添加
  } else {
    // debugger;
    songListId.push(id);
    localStorage.setItem(key, JSON.stringify(songListId));
  }
}

/**
 * 获取歌曲列表id
 * @param {String} key 
 * @returns {Array} 歌曲列表项id
 */
export function getPlaylistId(key = 'playlistId') {
  const songListId = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
  return songListId
}