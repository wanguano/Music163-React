import styled from 'styled-components'

export const ICons = styled.div`
  .play {
    position: relative;
    color: #fff;
    width: 66px;
    height: 31px;
    padding: 0 5px 0 0;
    margin-right: 35px;
    line-height: 31px;
    background-position: right -428px;
    cursor: pointer;

    .play-icon {
      width: 20px;
      height: 18px;
      margin: 6px 2px 2px 0;
      background-position: 0 -1622px;
      overflow: hidden;
    }

    &:after {
      content: '';
      position: absolute;
      right: -29px;
      top: 0;
      bottom: 0;
      width: 31px;
      background: url(${require('@/assets/img/sprite_button.png')}) 0 9999px;
      background-position: 0 -1588px;
    }
  }

  .inner {
    display: flex;
    width: 100%;
    height: 31px;
    padding: 0 7px 0 8px;
    background-position: 0 -387px;
    line-height: 31px;
  }

  .favorite,
  .share,
  .download,
  .comment {
    background-position: right -1020px;
    margin-right: 6px;
    padding: 0 5px 0 0;
  }

  .favorite > .inner,
  .share > .inner,
  .download > .inner,
  .comment > .inner {
    padding-right: 2px;
    padding-left: 28px;
  }

  .favorite {
    background-position: right -1020px;
    .inner {
      background-position: 0 -977px;
    }
  }

  .share {
    .inner {
      background-position: 0 -1225px;
    }
  }

  .download {
    .inner {
      background-position: 0 -2761px;
    }
  }

  .comment {
    .inner {
      background-position: 0 -1465px;
    }
  }
`
