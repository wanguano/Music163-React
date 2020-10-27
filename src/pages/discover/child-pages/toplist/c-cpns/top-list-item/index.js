import React, { memo, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils.js';
import { changeCurrentIndexAction, changeCurrentToplistIdAction } from '../../store/actionCreator'

import { TopListItemWrapper } from './style';
import propTypes from 'prop-types';

function TopListItem(props) {
  // props/state
  const { toplistInfo } = props;
  const [active, setActive] = useState(0);

  // redux hook
  const dispatch = useDispatch()

  // other function
  const clickItem = (e, index, id) => {
    e.preventDefault();
    setActive(index);
    // dispatch
    dispatch(changeCurrentToplistIdAction(id))
    dispatch(changeCurrentIndexAction(index))
  };

  return (
    <TopListItemWrapper>
      {toplistInfo.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <h3 style={{ marginTop: index === 4 ? '17px' : '' }}>
              {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
            </h3>
            <div
              className={
                'info ' + (props.selected && index === active ? 'bg' : '')
              }
              onClick={(e) => clickItem(e, index, item.id)}
            >
              <div className="image">
                <img src={getSizeImage(item.coverImgUrl, 44)} alt="" />
              </div>
              <div className="info-right">
                <div className="info-title">{item.name}</div>
                <div className="info-update">{item.updateFrequency}</div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
}

TopListItem.propTypes = {
  selected: propTypes.bool,
};

TopListItem.defaultProps = {
  selected: true,
};

export default memo(TopListItem);
