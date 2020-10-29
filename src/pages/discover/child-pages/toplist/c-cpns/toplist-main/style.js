import styled from 'styled-components'

export const ToplistMainWrapper = styled.div`
  padding: 10px 40px;

  .toplist-main {
    border: 1px solid #d9d9d9;

    .main-header {
      display: flex;
      .header-item {
        width: 74px;
        height: 34px;
        line-height: 18px;
        padding: 8px 10px;
        background-position: 0 0;
        background-repeat: repeat-x;
        background-color: #f2f2f2;
        color: #666;
        
        &:first-child {
          border-right: 1px solid #dadada;
        }
        &.header-title {
          width: 327px;
          border-right: 1px solid #dadada;
        }
        &.header-singer {
          width: 173px;
        }
        &.header-time {
          width: 91px;
          border-right: 1px solid #dadada;
        }
      }
    }

    .main-list {
      .song_item:nth-child(odd) {
        background: #f7f7f7 !important;
      }
      .song_item:nth-child(-n + 3) {
        height: 70px !important;
      }
    }
  }
`
