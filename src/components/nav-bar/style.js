import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    height: 35px;
    background-color: #c20c0c;
    overflow: hidden;
` 

export const CategoryList = styled.ul`
  display: flex;
  padding-left: 180px;
  .item {
    height: 34px;
    text-align: center;
    a {
      display: inline-block;
      padding: 0 13px;
      margin: 8px 17px 0;
      border-radius: 20px;
      color: #fff;
      &:hover,
      &.menu-active {
        text-decoration: none;
        background-color: #9b0909;
      }
    }
  }
`
