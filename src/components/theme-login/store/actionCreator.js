import { gotoPhoneLogin } from '@/service/login'
import * as actionTypes from './actionTypes'
// 更改登录框显示
export const changeIsVisible = (visibleState) => ({
  type: actionTypes.CHANGE_IS_VISIBLE_STATE,
  isVisible: visibleState
})

// 更改登录用户信息
export const changeUserProfile = (profileInfo) => ({
  type: actionTypes.CHANGE_PROFILE_INFO,
  profile: profileInfo
})


// -------------获取登录信息-------------
export const getLoginProfileInfo = (username, password, message) => {
  return (dispatch) => {
    gotoPhoneLogin(username, password).then((res) => {
      if (res.code !== 200) {
        message.error('账号或密码错误')
      }else {
        message.success('登录成功')
        console.log(res)
        // 登录成功
        document.cookie = res.cookie
        // 保存登录信息
        dispatch(changeUserProfile(res && res.profile))
        // 更改登录状态
        // localStorage.setItem('isLogin', true)
      }
    })
  }
}