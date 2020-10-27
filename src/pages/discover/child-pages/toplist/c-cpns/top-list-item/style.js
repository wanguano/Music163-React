import styled from 'styled-components'

export const TopListItemWrapper = styled.div`
  margin-top: ${props => props.top + 'px'};

  h3 {
    font-weight: bold;
    padding: 0 10px 6px 15px;
    font-size: 14px;
    font-family: 宋体;
    color: #000;
  }
  .info {
    display: flex;
    padding: 10px 0 10px 20px;
    height: 62px;
    background-color: ${props => (props.selected ? '#e6e6e6;' : '')};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #f4f2f2;
    }

    &.bg {
      background-color: #e6e6e6;
    }

    .info-right {
      margin-left: 10px;

      .info-title {
        width: 150px;
        overflow: hidden;
        margin-top: 2px;
        margin-bottom: 8px;
        color: #000;
      }

      .info-update {
        color: #999;
      }
    }
  }
`
