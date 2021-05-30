import React, { memo } from 'react'
import propTypes from 'prop-types'
import { RcmHeaderLeft,  RcmHeaderWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const ThemeHeaderRmc = function ThemeHeaderRmc(props) {
  const { title } = props

  // redux
  const { commentTotal } = useSelector(
    state => ({
      commentTotal: state.getIn(['player', 'currentCommentTotal'])
    }),
    shallowEqual
  )

  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        {commentTotal && <span>共{commentTotal}条评论</span>}
      </RcmHeaderLeft>
    </RcmHeaderWrapper>
  )
}

ThemeHeaderRmc.propTypes = {
  // title属性必填
  title: propTypes.string.isRequired,
}

ThemeHeaderRmc.defaultProps  = {
  keywords: []
}

export default memo(ThemeHeaderRmc)
