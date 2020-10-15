import styled from 'styled-components'

export const NotLoginWrapper = styled.div`
  display: ${props => !props.isLogin?'block':'none'};
`
