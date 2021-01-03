import { getSearchSongData } from '@/service/theme-header';
import * as actionTypes from './actionType';

// 搜索歌曲Action
const changeSearchSongListAction = (songList) => ({
  type: actionTypes.CHANGE_SEARCH_SONG_LIST,
  songList,
});

// 改变焦点状态
export const changeFocusStateAction = state => ({
  type: actionTypes.CHANGE_FOCUS_STATE,
  state
})

// 搜索歌曲network
export const getSearchSongListAction = (searchStr) => {
  return (dispatch) => {
    getSearchSongData(searchStr).then((res) => {
      const songList = res.result && res.result.songs
      dispatch(changeSearchSongListAction(songList));
    });
  };
};
