import { diffArray } from './util'
/**
 * 本地存储添加歌曲id,如果存在就不再添加
 * @param {Number} id 歌曲id
 * @param {String} key 本地存储key
 */
export function addPlaylistId(id, key = 'playlistId') {
  const songListId = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
  if (id instanceof Array) {
    id.forEach(id => {
      !songListId.includes(id) && songListId.push(id)
    })
  } else if (typeof id === 'number') {
    // 本地存储保存包括不再重复添加
    if (!songListId.includes(id)) songListId.push(id)
    } else {
    throw Error('id只能是数字或者数组类型')
  }
  localStorage.setItem(key, JSON.stringify(songListId))
}

/**
 * 获取歌曲列表id
 * @param {String} key
 * @returns {Array} 歌曲列表项id
 */
export function getPlaylistId(key = 'playlistId') {
  const songListId = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
  return songListId
}

/**
 * 删除的歌曲ID
 * @param {Number or String} id 要删除的歌曲ID
 * @param {String} key
 */
export function removeSongId(id, key = 'playlistId') {
  const songListId = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
  // 数组有值 & 查找到了要移除的id
  if (songListId.length && songListId.includes(id)) {
    songListId.splice(songListId.indexOf(id), 1)
  }
  localStorage.setItem(key, JSON.stringify(songListId))
}

/**
 * 清除全部歌曲
 * @param {String} key
 */
export function removeAllSong(key = 'playlistId') {
  let songListId = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
  // 数组有值 & 查找到了要移除的id
  if (songListId.length) {
    songListId.length = 0
  }
  localStorage.setItem(key, JSON.stringify(songListId))
}

/**
 * 重置本次存储歌曲列表ID
 * @param {Array} idArr 新歌曲列表数组
 */
export function resetPlaylistId(idArr) {
  removeAllSong()
  idArr && idArr.forEach((id) => addPlaylistId(id))
}
