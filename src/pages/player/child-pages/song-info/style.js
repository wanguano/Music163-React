import styled from 'styled-components';

export const SongInfoWrapper = styled.div`
  display: flex;

  .album {
    position: relative;
    width: 206px;

    img {
      margin: 34px;
    }

    .image_cover {
      top: -4px;
      left: -4px;
      background-position: -140px -580px;
      height: 215px;
    }
  }

  .song-detail-wrapper {
    width: 414px;
    margin-left: 20px;

    .song-title,
    .singer,
    .controls,
    .settle-album {
      display: flex;
      align-items: center;
    }

    .singer > span,
    .settle-album > span {
      color: #999;
    }

    .singer > a,
    .settle-album > a {
      color: #0c73c2;
      cursor: pointer;
    }

    .song-title {
      height: 32px;
      line-height: 32px;

      .single-song {
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }

      .song-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 24px;
        margin: 0 15px 0 11px;
      }

      .mv {
        width: 21px;
        height: 18px;
        background-position: 0 -18px;
      }
    }

    .singer,
    .settle-album {
      margin: 10px 0;
    }

    .controls {
      margin-bottom: 25px;
      margin-right: -10px;
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
    }

    .lyric-item {
      color: #333;
      text-align: center;
      margin: 9px 0;

      &:last-child,&:first-child {
        margin-bottom: 0;
        margin-top: 0;
      }
    }
  }
`;
