import { useDispatch } from "react-redux"
import { getAddSongDetailAction } from '@/pages/player/store/actionCreator'
import { getFindIdIndex } from '@/utils/math-utils'

/**
 * 调用该函数:传递播放列表和message组件,返回一个函数供于合成事件调用
 * @param {Array} playlist redux保存中播放列表
 * @param {Message} message Ant design消息组件:用于弹窗
 */
export function useAddPlaylist(playlist, message) {
  const dispatch = useDispatch()
  return (e, id) => {
    // 阻止超链接跳转
    e.preventDefault && e.preventDefault()
    // 获取歌曲详情,添加到播放列表
    dispatch(getAddSongDetailAction(id))
    // 提示添加成功或失败
    const index = getFindIdIndex(playlist, id)
    switch (index) {
      case -1:
        message.success({ content: '添加成功' })
        break
      default:
        message.success({ content: '不能添加重复的歌曲' })
    }
  }
}