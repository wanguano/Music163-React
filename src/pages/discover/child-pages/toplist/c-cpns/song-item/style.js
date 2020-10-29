import styled from "styled-components";

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
    width: ${props => props.isPic?'258px': '328px'};

    .font-active {
      font-size: 15px;
      cursor: pointer;
      margin-right: 8px;
    }
    .font-active:active {
      color: #d31111;
    }
  }

  .duration {
    width: 91px;
  }

`