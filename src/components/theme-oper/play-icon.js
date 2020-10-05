import React, { memo } from 'react'
import styled from 'styled-components'

const PlayIconWrapper = styled.a`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  background-position: -267px -205px;
  margin-right: ${props => props.right + 'px'};
  &:hover {
    background-position: -267px -235px;
  }
`
export default memo(function PlayIcon(props) {
  const { size = 17, right = 8, href } = props
  return (
    <PlayIconWrapper
      href={href}
      size={size}
      right={right}
      className="sprite_02"
    ></PlayIconWrapper>
  )
})
