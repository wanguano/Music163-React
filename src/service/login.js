import request from './request'
/* 手机号登录 */
export function gotoPhoneLogin(phone, password, md5_password, countrycode) {
  return request({
    url: '/login/cellphone',
    method: 'get',
    params: {
      phone,
      password,
      countrycode,
      md5_password
    }
  })
}

/* 邮箱登录 */
export function gotoEmailLogin(email, password, md5_password) {
  return request({
    url: '/login',
    method: 'get',
    params: {
      email, 
      password,
      md5_password
    }
  })
}