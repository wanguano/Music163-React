import styled from 'styled-components'

export const RcmHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 6px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  line-height: 33px;
`

export const RcmHeaderLeft = styled.div`
  display: flex;
  .hot-title {
    display: flex;
    margin-bottom: 5px;
    margin-right: 18px;
    a {
      color: #333333;
      &:hover {
        text-decoration: none;
      }
    }
  }
  span {
    line-height: 40px;
  }
`

