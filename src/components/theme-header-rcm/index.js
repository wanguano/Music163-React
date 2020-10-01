import React, { memo } from 'react'
import propTypes from 'prop-types'
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from './style'

const ThemeHeaderRmc = function ThemeHeaderRmc(props) {
  const { title, keywords } = props
  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <h2 className="hot-title">
          <a href="/discover/recommend" className="hot-text">
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
        <span>更多</span>
        <i className="icon"></i>
      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
}

ThemeHeaderRmc.propTypes = {
  // title属性必填
  title: propTypes.string.isRequired,
  keywords: propTypes.array
}

ThemeHeaderRmc.defaultProps  = {
  keywords: []
}

export default memo(ThemeHeaderRmc)
