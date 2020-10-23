import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


import { Comment, Tooltip, Avatar } from 'antd';
import ThemeHeader from '@/components/theme-header';
import { SongCommentWrapper, WonderfulWrapper } from './style';
import { getHotCommentAction } from '../../store/actionCreator';

export default memo(function SongComment() {
  // props/state

  // redux hook
  const dispatch = useDispatch();
  const { hotComments } = useSelector(
    (state) => ({
      hotComments: state.getIn(['player', 'hotComments']),
    }),
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getHotCommentAction(167876));
  });

  // other handle
  function formatDate(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ');
  }
  // time(); // "2018-08-09 18:25:54"

  return (
    <SongCommentWrapper>
      <ThemeHeader title="评论" />
      {/* 精彩评论 */}
      <WonderfulWrapper>
        <div className="header-comment">精彩评论</div>
        {hotComments && hotComments.map((item) => {
          return (
            <Comment
              key={item.commentId}
              author={item.user.nickname}
              avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
              content={<p>{item.content}</p>}
              datetime={
                <Tooltip title={formatDate(item.time)}>
                  {formatDate(item.time).slice(0, formatDate(item.time).indexOf(' '))}
                </Tooltip>
              }
            />
          );
        })}
      </WonderfulWrapper>
    </SongCommentWrapper>
  );
});
