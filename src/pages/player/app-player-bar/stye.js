import styled from 'styled-components'

export const PlayerbarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
    align-content: center;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .pre,
  .next,
  .play {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    cursor: pointer;
  }

  .pre {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    /* 动态的传递 */
    background-position: 0 -204px;
    margin-top: 0;

    &:hover {
      /* 动态的传递 */
      background-position: -40px -204px;
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayerInfo = styled.div`
  display: flex;
  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
    overflow: hidden;
    margin: 6px 15px 0 0;
  }

  .play-detail {
    .song-info {
      width: 100%;
      height: 28px;
      overflow: hidden;
      text-shadow: 0 1px 0 #171717;
      line-height: 28px;
      .song-name {
        color: #e8e8e8;
        margin: 0 10px;
      }
      .singer-name {
        color: #9b9b9b;
      }
    }

    .ant-slider {
      width: 493px;
      height: 9px;

      margin-top: -2px;
      z-index: 100;

      .ant-slider-rail,
      .ant-slider-track,
      .ant-slider-step {
        height: 9px;
      }

      .ant-slider-rail {
        background: url(${require('@/assets/img/progress_bar.png')}) 0 0;
      }

      .ant-slider-track {
        background: url(${require('@/assets/img/progress_bar.png')});
        background-position: left -66px;
      }

      .ant-slider-handle {
        width: 20px;
        height: 22px;
        border: 0;
        background: url(${require('@/assets/img/sprite_icon.png')});
        background-position: 0 -250px;
      }
    }
  }

  .song-time {
    line-height: 68px;
    color: #a1a1a1;
    margin: 0 30px 0 9px;

    .total-time {
      color: #797979;
    }
  }
`

export const Operator = styled.div`
 display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -240px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }

`
