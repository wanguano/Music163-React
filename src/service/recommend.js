import request from './request'

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}