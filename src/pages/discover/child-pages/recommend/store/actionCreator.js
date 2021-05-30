import * as actionTypes from './actionTypes'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  // getSettleSinger,
} from '@/service/recommend.js'
import { getToplistDetail } from '@/service/toplist'

// 轮播图Action
export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners,
})

// 热门推荐Action
export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
})

// 新碟上架Action
export const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
  // newAlbums: res.monthData, // 新接口数据
})

// 飙升榜单Action
export const changeUpRanking = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})
// 新歌榜单Action
export const changeNewRanking = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})
// 原创榜单Action
export const changeOriginRanking = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
})

// 入驻歌手Action
export const changeSettleSinger = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSinger: res.artists,
})

// --------------------------------------------------------------
// 发送网络请求将结果传递给派发的Action中 (react-redux可以让该函数返回一个函数而不是返回一个对象: redux-thunk使用)
// 轮播图network request
export const getTopBannersAction = () => {
  return (dispatch) => {
    // 发送网络请求
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 热门推荐network request
export const getHostBannersAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

// 新碟上架network request
export const getNewAlbumsAction = () => {
  return (dispatch) => {
    getNewAlbums().then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 榜单详情 network
export const getTopListAction = (idx) => {
  return (dispatch) => {
    getToplistDetail(idx).then((res) => {
      switch (idx) {
        case 19723756:
          dispatch(changeUpRanking(res))
          break
        case 3779629:
          dispatch(changeNewRanking(res))
          break
        case 2884035:
          dispatch(changeOriginRanking(res))
          break
        default:
      }
    })
  }
}

// 入驻歌手network request
export const getSettleSingerAction = (limit) => {
  return (dispatch) => {
    // getSettleSinger(limit).then(res => {
    //   dispatch(changeSettleSinger(res))
    //   console.log(res)
    // })
    const res = {
      artists: [
        {
          albumSize: 50,
          alias: ['JJ Lin'],
          briefDesc: '',
          followed: false,
          id: 3684,
          img1v1Id: 109951165911947840,
          img1v1Id_str: '109951165911947840',
          img1v1Url:
            'http://p1.music.126.net/0L5drAV43FLJk6J9dRhfew==/109951165911947840.jpg',
          musicSize: 637,
          name: '林俊杰',
          picId: 109951165911950320,
          picId_str: '109951165911950321',
          picUrl:
            'http://p1.music.126.net/dwbXimgQn1YnJzwSlPDk-A==/109951165911950321.jpg',
          topicPerson: 0,
          trans: '',
          detail: 'https://baike.baidu.com/item/%E6%9E%97%E4%BF%8A%E6%9D%B0/131821?fr=aladdin'
        },
        {
          accountId: 97137413,
          albumSize: 17,
          alias: ['Joker Xue'],
          briefDesc: '',
          followed: false,
          id: 5781,
          img1v1Id: 109951165034950660,
          img1v1Id_str: '109951165034950656',
          img1v1Url:
            'http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg',
          musicSize: 295,
          name: '薛之谦',
          picId: 109951165034938860,
          picId_str: '109951165034938865',
          picUrl:
            'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg',
          topicPerson: 0,
          trans: '',
          detail: 'https://baike.baidu.com/item/%E8%96%9B%E4%B9%8B%E8%B0%A6/144417'
        },
        {
          accountId: 31265745,
          albumSize: 39,
          alias: ['Vae'],
          briefDesc: '',
          followed: false,
          id: 5771,
          img1v1Id: 109951163536269820,
          img1v1Id_str: '109951163536269820',
          img1v1Url:
            'http://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg',
          musicSize: 253,
          name: '许嵩',
          picId: 109951163536274580,
          picId_str: '109951163536274581',
          picUrl:
            'http://p1.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg',
          topicPerson: 0,
          trans: '',
          detail: 'https://baike.baidu.com/item/%E8%AE%B8%E5%B5%A9/5425'
        },
        {
          albumSize: 107,
          alias: ['Eason Chan'],
          briefDesc: '',
          followed: false,
          id: 2116,
          img1v1Id: 109951165666524000,
          img1v1Id_str: '109951165666523995',
          img1v1Url:
            'http://p1.music.126.net/Cxj3lUbVql1OqWaPf0cLrQ==/109951165666523995.jpg',
          musicSize: 1813,
          name: '陈奕迅',
          picId: 109951165666529170,
          picId_str: '109951165666529174',
          picUrl:
            'http://p1.music.126.net/_6sjlvieZvq_tcj-NYbSVQ==/109951165666529174.jpg',
          topicPerson: 0,
          trans: '',
          detail: 'https://baike.baidu.com/item/%E9%99%88%E5%A5%95%E8%BF%85/128029'
        },
        {
          accountId: 481214790,
          albumSize: 23,
          alias: [],
          briefDesc: '',
          followed: false,
          id: 31165848,
          img1v1Id: 109951163780408940,
          img1v1Id_str: '109951163780408942',
          img1v1Url:
            'http://p1.music.126.net/-vAAAt4wZ8bAJCkilZVbcQ==/109951163780408942.jpg',
          musicSize: 98,
          name: '刘大壮',
          picId: 109951163780702430,
          picId_str: '109951163780702427',
          picUrl:
            'http://p1.music.126.net/H70ceB4g0VAgWeLYrZEiWQ==/109951163780702427.jpg',
          topicPerson: 0,
          trans: '',
          detail: 'https://baike.baidu.com/item/%E5%88%98%E5%A4%A7%E5%A3%AE/55396978'
        },
      ],
      more: true,
      code: 200,
    }
    dispatch(changeSettleSinger(res))
  }
}
