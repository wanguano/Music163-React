import styled from 'styled-components'

export const NotLogin = styled.div`
  min-height: 700px;
  display: ${props => (!props.isLogin ? 'block' : 'none')};
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .inner {
    width: 902px;
    height: 470px;
    margin: 0 auto 0;
    padding-top: 70px;
    background-position: 0 70px;

    h2 {
      text-indent: -9999px;
    }

    .detail {
      font-size: 14px;
      color: #666;
      padding: 151px 0 0 535px;
      line-height: 23px;
    }

    .btn-login {
      cursor: pointer;
      display: block;
      width: 157px;
      height: 48px;
      margin: 36px 0 0 535px;
      background-position: 0 9999px;
      text-indent: -9999px;
    }
    .btn-login:hover {
      background-position: 0 -431px;
    }
  }
`
