import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 38px;
  margin-bottom: 10px;
  .content {
    position: relative;
    display: flex;
    /* 设置主轴排序方式 */
    justify-content: center;
    /* 设置侧轴排序方式 */
    align-items: center;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;

    .inner {
      width: 640px;
      height: 150px;

      .page {
        display: flex !important;
        justify-content: space-between;

        /* .c-item {
          width: 118px;
          height: 151px;
          background-color: #ccc;
          margin-right: 10px;
        } */

      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background-position-y: -76px;
      cursor: pointer;
    }

    .arrow-left {
      left: 5px;
      background-position-x: -261px;
    }

    .arrow-right {
      right: 5px;
      background-position-x: -294px;
    }
  }
`
