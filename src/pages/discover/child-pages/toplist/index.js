import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { TopListLeft, TopListRight, TopListWrapper } from './style';
import TopListItem from './c-cpns/top-list-item';
import ToplistTitle from './c-cpns/toplist-title';
import {
  getToplistTitleInfoAction,
  getToplistInfoAction,
} from './store/actionCreator';

export default memo(function Toplist() {
  // redux/hook
  const dispatch = useDispatch();
  const { toplistInfo, currentToplistId } = useSelector(
    (state) => ({
      toplistInfo: state.getIn(['toplist', 'toplistInfo']),
      currentToplistId: state.getIn(['toplist', 'currentToplistId']),
    }),
    shallowEqual
  );

  // other hook
  useEffect(() => {
    dispatch(getToplistInfoAction());
  }, [dispatch]);

  // TODO:----------------------- 获取榜单详细信息-------------------------------------先做样式
  useEffect(() => {
    // 派发榜单标题信息Action
    dispatch(getToplistTitleInfoAction(currentToplistId));
  }, [currentToplistId, dispatch]);

  return (
    <TopListWrapper className="wrap-bg2">
      <div className="content w980">
        <TopListLeft>
          <div className="top-list-container">
            <TopListItem toplistInfo={toplistInfo} />
          </div>
        </TopListLeft>
        <TopListRight>
          <ToplistTitle />
        </TopListRight>
      </div>
    </TopListWrapper>
  );
});
