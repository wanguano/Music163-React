import styled from 'styled-components'

export const SearchWrapper = styled.div`
  .content {
    padding: 40px;
    height: 1000px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    margin: 0 auto;

    .search-wrapper {
      display: flex;
      justify-content: center;

      .ant-input-search {
        border-radius: 8px;
        height: 42px;
        border-color: #c9c9c9;
        box-shadow: inset 0 0 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);
      }
    }
    .search-content {

      .search-info {
        margin: 28px 0 17px;
        color: #999;

        .music-amount {
          color: #c20c0c;
        }
      }

      .search-category {
        display: flex;
        height: 39px;
        border: 1px solid #ccc;
        border-width: 0 1px;
        background-position: 0 0;
        background-repeat: repeat-x;

        .route-item {
          width: 112px;
          height: 37px;
          text-align: center;
          font-size: 14px;

          &.active {
            background-position: left -90px;
            border-right: solid 1px #ccc;
          }

          &:hover {
            background-position: left -90px;
            border-right: solid 1px #ccc;
            text-decoration: none;
          }

          em {
            display: block;
            width: 108px;
            padding: 2px 2px 0 0;
            line-height: 37px;
            cursor: pointer;
            text-align: center;
          }
        }
      }
    }
  }
`
