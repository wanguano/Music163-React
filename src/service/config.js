// 本地测试API
// const devBaseURL = 'http://localhost:3000'
// const proBaseURL = 'http://localhost:3000'
// 已经部署到服务器上的API
const devBaseURL = 'http://23.224.55.27:3000'
const proBaseURL = 'http://23.224.55.27:3000'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 8000
