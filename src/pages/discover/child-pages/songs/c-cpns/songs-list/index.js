import React, { useState, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../../store/constants';
import { getSongList } from "../../store/actionCreators";

// import HYThemeCover from '@/components/theme-cover';
import SongCover from '@/components/song-cover'
import HYPagination from '@/components/pagination';
import {
  SongListWrapper
} from "./style";
import { Skeleton } from 'antd';

export default memo(function HYSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songList", "categorySongs"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  function onPageChange(page, pageSize) {
    window.scroll(0, 0);
    setCurrentPage(page);
    dispatch(getSongList(page));
  }
  return (
    <SongListWrapper>
      { !songList.length? <Skeleton active /> : <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              // <HYThemeCover info={item} key={item.id} right="30px" />
              <SongCover info={item} />
            )
          })
        }
      </div>}
      <HYPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={PER_PAGE_NUMBER}
                    onPageChange={onPageChange}/>
    </SongListWrapper>
  )
})
