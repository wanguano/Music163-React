import styled from 'styled-components'

export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 28px;
  cursor: pointer;
  justify-content: space-around;
  margin-top: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .song-name {
    width: 250px;
    height: 28px;
    text-align: left;
    line-height: 28px;
    text-indent: -18px;
  }

  .control-and-singer {
    display: flex;

    .anticon-delete,
    .anticon-download,
    .anticon-like,
    .anticon-github {
      opacity: 0;
      color: #ccc;
      font-size: 14px;
      margin: 2px 6px 0;
    }

    .anticon-delete:hover,
    .anticon-download:hover,
    span:hover,
    .anticon-like:hover,
    .anticon-github:hover {
      color: #fff;
    }

    span {
      margin-left: 4px;
    }
  }

  &:hover .anticon-delete,
  &:hover .anticon-download,
  &:hover .anticon-like,
  &:hover .anticon-github {
    opacity: 1;
  }
`
