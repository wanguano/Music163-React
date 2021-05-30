import styled from 'styled-components'
import { ICons } from '../../../../assets/css/common'

export const SongDetailLeftWrapper = styled.div`
  /* width: 709px; */
  padding: 47px 30px 40px 39px;
  .gap {
    margin-top: 15px;
  }
`

export const HeaderTitle = styled(ICons)`
  .conver-img {
    position: relative;
    span {
      position: absolute;
      width: 208px;
      height: 208px;
      background-position: 0 -1285px;
      top: -4px;
      left: -4px;
    }
  }
  .song-detail {
    margin-left: 30px;
    font-size: 14px;
    .detail-title-wrapper {
      display: flex;
      .icons {
        width: 54px;
        height: 24px;
        background-position: 0 -243px;
        margin-right: 12px;
      }
      .detail-title {
        line-height: 24px;
        font-size: 20px;
      }
    }
    .avatar {
      display: flex;
      margin-top: 18px;
      line-height: 35px;
      .avatar-name {
        margin: 0 15px;
      }
    }
    .label-warpper {
      line-height: 35px;
      > span {
        margin-right: 10px;
        line-height: 30px;
        height: 30px;
      }
    }
  }
`

export const MainDetail = styled.div`
  margin-top: 25px;
  
`
