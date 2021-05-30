import styled from 'styled-components'

export const SongItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  .song-item {
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
  }

  .rank-count {
    padding-left: 25px;
    width: 70px;
    color: #999;
  }

  .song-info {
    display: flex;
    justify-content: space-between;
    width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .font-active {
      font-size: 15px;
      cursor: pointer;
      margin-right: 8px;
    }
    .font-active:active {
      color: #d31111;
    }

    .btn {
      width: 17px;
      height: 17px;
      margin-left: 8px;
      cursor: pointer;
      &.addto {
        position: relative;
        top: 2px;
        background-position: 0 -700px;
      }
    }

    .left-info {
      display: flex;
      overflow: hidden;
    }
    .left-info>a {
      display: inline-block;
      width: 130px;
    }
  }

  .duration {
    width: 91px;
  }

  .singer-song {

  }
`
