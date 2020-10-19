import request from './request'

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}


// 一个组件需要发送网络的基本步骤:
// 1.在网络请求对应文件中封装对应的函数
// 2.修改组件目录下store中的reducer (前提在actionTypes定义常量名)
// 3.在actionCreator文件中添加action发送网络请求
// 4.在组件中使用dispatch action 测试网络请求数据
// 5.由于携带的query string是数字可以定义为常量(方便后期修改)
// 6.在组件中使用useSelector展示数据
// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbums(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 榜单
export function getTopList(idx) {
  return request({
    url: '/top/list',
    // url: '/toplist',
    // url: '/playlist/detail',
    params: {
      idx
    }
  })
}

// 入驻歌手
export function getSettleSinger(limit) {
  return request({
    url: '/artist/list',
    params: {
      limit
    }
  })
}