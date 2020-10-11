import React, { memo, useState } from 'react'
import { SongDetailWrapper, SongLeft, SongRight } from './style'

export default memo(function JMSongDetail(props) {
  // props/state  先写死: 167876    到时候换这个: props.location.state.id
  const [id, setId] = useState(167876)
  // 之后根路id发送请求,数据保存在redux当中
  return (
    <SongDetailWrapper>
      <div className="content w980">
        <SongLeft>
          <h2>SongInfo 歌曲信息</h2>
          <h2>SongComment 歌曲评论</h2>
        </SongLeft>
        <SongRight>
          <h2>SongInclude 包含音乐</h2>
          <h2>SongRelevant 相关音乐</h2>
          <h2>客户端下载</h2>
        </SongRight>
      </div>
    </SongDetailWrapper>
  )
})
