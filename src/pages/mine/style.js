import styled from 'styled-components'

export const NotLogin = styled.div`
  min-height: 700px;
  display: ${props => (!props.isLogin ? 'block' : 'none')};
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .inner {
    width: 807px;
    height: 372px;
    margin: 0 auto 0;
    background-position: 0 104px;

    h2 {
      text-indent: -9999px;
    }

    .btn-login {
      cursor: pointer;
      display: block;
      width: 167px;
      height: 45px;
      margin: 278px 0 0 482px;
      text-indent: -9999px;
    }
    .btn-login:hover {
      background-position: 0 -278px;
    }
  }
`
