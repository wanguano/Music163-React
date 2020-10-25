import React, { memo, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { SONG_LIST_LIMIT } from '@/common/constants.js';
import { getSongListAction } from './store/actionCreator';

import { Pagination } from 'antd';
import ThemeHeader from '@/components/theme-header-rcm';
import SongCover from '@/components/song-cover';
import { SongListWrapper } from './style';

export default memo(function JMSong() {
  // props/state
  const [offset, setOffset] = useState(0);

  // redux hook
  const { songList } = useSelector(
    (state) => ({
      songList: state.getIn(['songList', 'songList']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getSongListAction(SONG_LIST_LIMIT, 0));
  }, [dispatch]);
  // offset改变派发action
  useEffect(() => {
    dispatch(getSongListAction(SONG_LIST_LIMIT, offset));
  }, [offset, dispatch]);

  // other function
  const changePage = useCallback((currentPage) => {
    // offset=(当前页数-1)*limit
    const targePageCount = (currentPage - 1) * SONG_LIST_LIMIT;
    setOffset(targePageCount);
    window.scroll(0, 0);
  }, []);

  return (
    <SongListWrapper className="w980">
      <ThemeHeader title="全部" />
      <div className="content">
        {songList.map((songItem) => {
          return (
            <SongCover key={songItem.id} songList={songItem} width={150} />
          );
        })}
      </div>
      <Pagination
        defaultCurrent={1}
        total={370}
        onChange={(currentPage) => changePage(currentPage)}
      />
    </SongListWrapper>
  );
});
