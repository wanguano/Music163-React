import styled from 'styled-components'

const VipWrapper = styled.div`
  .box {
    position: relative;
    width: 100px;
    height: 100px;
    border: solid 1px red;
    .inner {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -25px 0 0 -25px;
      width: 50px;
      height: 50px;
      background-color: skyblue;
    }
  }
`

export { VipWrapper }
