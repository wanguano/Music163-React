import styled from 'styled-components'

export const LyricContentWrapper = styled.div`
  position: relative;
  width: 423px;
  height: 100%;
  overflow-x: auto;
  padding: 12px 22px 7px;

  /* 滚动条 */
  ::-webkit-scrollbar-thumb:horizontal {
    /*水平滚动条的样式*/
    width: 4px;
    background-color: #9f9f9f;
    -webkit-border-radius: 4px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #1a1a1a; /*滚动条的背景颜色*/
    -webkit-border-radius: 0; /*滚动条的圆角宽度*/
  }
  ::-webkit-scrollbar {
    width: 8px; /*滚动条的宽度*/
    height: 6px; /*滚动条的高度*/
  }
  ::-webkit-scrollbar-thumb:vertical {
    /*垂直滚动条的样式*/
    height: 50px;
    background-color: #9f9f9f;
    -webkit-border-radius: 4px;
    /* outline: 2px solid #000; */
    /* outline-offset: -2px; */
    border: 2px solid #9f9f9f;
  }

  .lyric-item {
    height: auto !important;
    line-height: 32px;
    color: #989898;
    transition: color 0.7s linear;
    /* position: relative; */
    /* transition: all 1s;+ */

    &.active {
      /* top: 12px; */
      color: #fff!important;
    }
  }

  .lyric-content {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
  }
`
