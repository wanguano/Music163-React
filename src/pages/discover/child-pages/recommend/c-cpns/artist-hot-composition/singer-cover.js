import React, { memo } from 'react'

import styled from 'styled-components'


const SingerCoverWrapper = styled.div`
  display: flex;

`

export default memo(function SingerCover(props) {
  // const {info} = props

  return (
    <SingerCoverWrapper>
      <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt=""/>
      <div className="singer-title"></div>
    </SingerCoverWrapper>
  )
})
