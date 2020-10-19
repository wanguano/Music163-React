import React, { memo, useState } from 'react'
import { getSizeImage } from '@/utils/format-utils.js'
import { TopListItemWrapper } from './style'
import propTypes from 'prop-types'

function TopListItem(props) {
  // props/state
  const { toplistInfo } = props
  const [active, setActive] = useState(0)

  // other handle
  const clickItem = (e, index) => {
    e.preventDefault()
    setActive(index)
  }

  return (
    <TopListItemWrapper top={props.top}>
      <h3>云音乐特色榜</h3>
      {toplistInfo.map((item, index) => {
        return (
          <a
            href="todo"
            className={
              'info ' + (props.selected && index === active ? 'bg' : '')
            }
            key={item.id}
            onClick={e => clickItem(e, index)}
          >
            <div className="image">
              <img src={getSizeImage(item.coverImgUrl, 44)} alt="" />
            </div>
            <div className="info-right">
              <div className="info-title">{item.name}</div>
              <div className="info-update">{item.updateFrequency}</div>
            </div>
          </a>
        )
      })}
    </TopListItemWrapper>
  )
}

TopListItem.propTypes = {
  top: propTypes.number,
  selected: propTypes.bool,
}

TopListItem.defaultProps = {
  top: 0,
  selected: true,
}

export default memo(TopListItem)
