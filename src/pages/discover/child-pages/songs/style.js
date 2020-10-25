import styled from 'styled-components';

export const SongListWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding: 40px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .ant-pagination {
    position: relative;
    left: 50%;
    transform: translateX(-25%);
    margin: 18px 0 -6px;

    .ant-pagination-options {
      display: none !important;
    }
  }
`;
