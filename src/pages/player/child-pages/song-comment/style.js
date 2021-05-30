import styled from 'styled-components'

export const SongCommentWrapper = styled.div`
  margin-top: 40px;
  .header-comment {
    color: #333;
    font-weight: bold;
    font-size: 16px;
    border-bottom: 1px solid #cfcfcf;
  }
  .ant-comment-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
  }
  .comment-like {
    &:hover {
      border-bottom: solid 1px #ccc;
    }
  }
`

export const WonderfulWrapper = styled.div`
  margin-top: 20px;
`
// 最新评论
export const SoNewWrapper = styled.div``
