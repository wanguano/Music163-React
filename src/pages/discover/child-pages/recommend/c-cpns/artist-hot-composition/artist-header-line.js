import React, { memo } from 'react'
import styled from 'styled-components'

const HeaderLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;

  .hot-artist {
    font-weight: bold;
    color: #333;
  }
  .show-all {
    color: #666;
  }
`


export default memo(function ArtistHeaderLine(props) {
  const { titleSlot, rightSlot } = props
  return (
    <HeaderLineWrapper>
      <div className="hot-artist">{titleSlot}</div>
      <a href="/discover/recommend" className="no-link show-all">{rightSlot}</a>
    </HeaderLineWrapper>
  )
})
