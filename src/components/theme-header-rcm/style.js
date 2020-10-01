import styled from "styled-components";

export const RcmHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #C10D0C;
  background: url('${require('@/assets/img/sprite_02.png')}') no-repeat center ;
  background-position: -225px -156px;
  line-height: 33px;
`

export const RcmHeaderLeft = styled.div`
 display: flex;
 .hot-title {
   display: flex;
   .icon {
    
   }
 }

 .keywords {
  display: flex;
 }
`

export const RcmHeaderRight = styled.div`

`