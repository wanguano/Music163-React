import React, { memo } from 'react'
import propTypes from 'prop-types'
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from './style'

const ThemeHeaderRmc = function ThemeHeaderRmc(props) {
  const { title, keywords, showIcon, right } = props
  return (
    <RcmHeaderWrapper showIcon={showIcon}>
      <RcmHeaderLeft>
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keywords.map(item => {
            return (
              <li className="item" key={item}>
                <a href="/">{item}</a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>
        <span>{right}</span>
        {showIcon &&<i className="icon"></i>}
      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
}

ThemeHeaderRmc.propTypes = {
  // title属性必填
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  showIcon: propTypes.bool,
  right: propTypes.any
}

ThemeHeaderRmc.defaultProps  = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default memo(ThemeHeaderRmc)
