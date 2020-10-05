import React, { memo } from 'react'
import styled from 'styled-components'

const FavouriteIconWrapper = styled.a`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  background-position: -300px -205px;
  margin-right: ${props => props.right + 'px'};

  &:hover {
    background-position: -300px -235px;
  }
`
export default memo(function FavouriteIcon(props) {
  const { size = 17, right = 8, href } = props
  return (
    <FavouriteIconWrapper
      href={href}
      size={size}
      right={right}
      className="sprite_02"
    ></FavouriteIconWrapper>
  )
})
