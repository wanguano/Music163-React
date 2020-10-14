import styled from 'styled-components'

export const SongInfoWrapper = styled.div`
  display: flex;
  padding: 36px 30px 40px 39px;

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
    
    .singer>span,
    .settle-album>span {
      color: #999;
    }

    .singer>a,
    .settle-album>a {
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
        font-size: 24px;
        margin: 0 15px 0 11px;
      }

      .mv {
        width: 21px;
        height: 18px;
        background-position: 0 -18px;
      }
    }

    .singer, .settle-album {
      margin: 10px 0;
    }

    .controls {
      margin-bottom: 25px;
      margin-right: -10px;
      .play {
        color: #fff;
        width: 66px;
        height: 31px;
        padding: 0 5px 0 0;
        line-height: 31px;
        background-position: right -428px;

        /* i {
          padding: 0 7px 0 8px;
          background-position: 0 -387px;
        } */
      }

      .favorite {

      }

      .share {

      }

      .download {

      }

      .comment {

      }
    }

  }
`
