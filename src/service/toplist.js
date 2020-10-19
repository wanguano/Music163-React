import request from './request'

export function getToplistInfo() {
  return request({
    url: '/toplist'
  })
}