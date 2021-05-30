import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils.js'
import styled from 'styled-components'

const SingerCoverWrapper = styled.a`
  display: flex;
  margin-top: 14px;
  width: 210px;
  height: 62px;
  background: #fafafa;

  &:hover {
    text-decoration: none;
  }

  .singer-title {
    width: 100%;
    height: 100%;
    padding: 4px 9px;
    border: 1px solid #e9e9e9;
    border-left: none;

    .singer-name {
      font-weight: bold;
      font-size: 14px;
      color: #333;
      margin-bottom: 8px;
    }
  }
`

export default memo(function SingerCover(props) {
  const { info } = props
  return (
    <SingerCoverWrapper href={info.detail} target="_blank">
      <div className="image">
        <img src={getSizeImage(info.picUrl, 62)} alt="" />
      </div>
      <div className="singer-title">
        <div className="text-nowrap singer-name">{info.name}</div>
        <div className="text-nowrap singer-detail">流行歌手</div>
      </div>
    </SingerCoverWrapper>
  )
})
