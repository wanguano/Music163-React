import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  .gap {
    margin-right: 15px;
  }
`

export const LoginLeft = styled.div`
  width: 250px;
  .login-content {
    border-right: 1px dotted #ccc;
    height: 220px;
    .login-bg {
      width: 250px;
      height: 140px;
      background: url(${require('@/assets/img/platform.png')}) no-repeat center;
      margin-bottom: 30px;
    }
  }
`

export const LoginRight = styled.div`
  padding: 3px 0 3px 39px;
  margin-top: -15px;
  .icons-wrapper {
    
  }
`

export const PhoneLoginModal = styled.section`
  display: flex;
  justify-content: center;
`
