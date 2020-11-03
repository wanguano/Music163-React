import styled from 'styled-components'

export const SearchWrapper = styled.div`
  width: 982px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .content {
    padding: 40px;
    height: 1000px;

    .search-wrapper {
      display: flex;
      justify-content: center;

      .ant-input-search {
        border-radius: 8px;
        height: 42px;
      }
    }
  }
`
