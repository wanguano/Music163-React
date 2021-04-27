import { LOCAL_PLAYLIST_ID_KEY } from '@/common/constants'
import { LOCAL_CURRENT_SONG_INDEX_KEY } from '../common/constants'
/**
 * 本地存储添加歌曲id,如果存在就不再添加
 * @param {Number} id 歌曲id
 * @param {String} key 本地存储key
 */
export function addPlaylistId(id, key = LOCAL_PLAYLIST_ID_KEY) {
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
export function getPlaylistId(key = LOCAL_PLAYLIST_ID_KEY) {
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
export function removeSongId(id, key = LOCAL_PLAYLIST_ID_KEY) {
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
export function removeAllSong(key = LOCAL_PLAYLIST_ID_KEY) {
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

// ------记忆当前播放歌曲Index------
/**
 * 更新音乐索引
 * @param {Number} index 音乐索引
 * @param {*} key 
 */
export function setCurrentSongIndex(index, key = LOCAL_CURRENT_SONG_INDEX_KEY) {
    localStorage.setItem(key, index)
}

/**
 * 初始存储
 * @param {Numebr} index 音乐索引
 * @param {String} key 
 */
export function initCurrentSongIndex(index = 0, key = LOCAL_CURRENT_SONG_INDEX_KEY) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, index)
  }
}

/**
 * 获取歌曲索引
 * @param {String} key 
 * @returns 获取歌曲索引
 */
export function getCurrentSongIndex(key = LOCAL_CURRENT_SONG_INDEX_KEY) {
  const currentIndex = JSON.parse(localStorage.getItem(key)) || 0
  return currentIndex
}
