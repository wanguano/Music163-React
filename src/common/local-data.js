export const headerLinks = [
  {
    title: '发现音乐',
    link: '/discover',
  },
  {
    title: '我的音乐',
    link: '/mine',
  },
  {
    title: '朋友',
    link: '/friend',
  },
  {
    title: '商城',
    link: 'https://music.163.com/store/product',
  },
  {
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/',
  },
  {
    title: '下载客户端',
    link: 'https://music.163.com/#/download',
  },
]

export const footerLinks = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service',
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy',
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children',
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html',
  },
  {
    title: '意见反馈',
    link: '#',
  },
]

export const footerImages = [
  {
    link: 'https://music.163.com/st/userbasic#/auth',
  },
  {
    link: 'https://music.163.com/recruit',
  },
  {
    link: 'https://music.163.com/web/reward',
  },
  {
    link: 'https://music.163.com/uservideo#/plan',
  },
]

// discover中的数据
export const dicoverMenu = [
  {
    title: '推荐',
    link: '/discover/recommend',
  },
  {
    title: '排行榜',
    link: '/discover/ranking',
  },
  {
    title: '歌单',
    link: '/discover/songs',
  },
  {
    title: '主播电台',
    link: '/discover/djradio',
  },
  {
    title: '歌手',
    link: '/discover/artist',
  },
  {
    title: '新碟上架',
    link: '/discover/album',
  },
]

// 热门主播
export const hotRadios = [
  {
    picUrl:
      'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg',
    name: '陈立',
    position: '心理学家、美食家陈立教授',
    // url: '/user/home?id=278438485',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg',
    name: 'DJ艳秋',
    position: '著名音乐节目主持人',
    // url: '/user/home?id=91239965',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg',
    name: '国家大剧院古典音乐频道',
    position: '国家大剧院古典音乐官方',
    // url: '/user/home?id=324314596',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg',
    name: '谢谢收听',
    position: '南京电台主持人王馨',
    // url: '/user/home?id=1611157',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg',
    name: 'DJ晓苏',
    position: '独立DJ，CRI环球旅游广播特邀DJ',
    // url: '/user/home?id=2313954',
    url: '/discover',
  },
]

// 歌手分类
export const singerCategories = [
  {
    title: '推荐',
    area: -1,
    artists: [
      {
        name: '推荐歌手',
        type: 1,
        url: '/discover/artist',
        id: 0,
      },
      {
        name: '入驻歌手',
        type: 2,
        url: '/discover/artist?cat=5001',
        dataPath: '/artist/list?cat=5001',
      },
    ],
  },
  {
    title: '华语',
    area: 7,
    artists: [
      {
        name: '华语男歌手',
        url: '/discover/artist?id=1001',
        type: 1,
      },
      {
        name: '华语女歌手',
        url: '/discover/artist?id=1002',
        type: 2,
      },
      {
        name: '华语组合/乐队',
        url: '/discover/artist?id=1003',
        type: 3,
      },
    ],
  },
  {
    title: '欧美',
    area: 96,
    artists: [
      {
        name: '欧美男歌手',
        url: '/discover/artist?id=2001',
        type: 1,
      },
      {
        name: '欧美女歌手',
        url: '/discover/artist?id=2002',
        type: 2,
      },
      {
        name: '欧美组合乐队',
        url: '/discover/artist?id=2003',
        type: 3,
      },
    ],
  },
  {
    title: '日本',
    area: 8,
    artists: [
      {
        name: '日本男歌手',
        url: '/discover/artist?id=6001',
        type: 1,
      },
      {
        name: '日本女歌手',
        url: '/discover/artist?id=6002',
        type: 2,
      },
      {
        name: '日本组合/乐队',
        url: '/discover/artist?id=6003',
        type: 3,
      },
    ],
  },
  {
    title: '韩国',
    area: 16,
    artists: [
      {
        name: '韩国男歌手',
        url: '/discover/artist?id=7001',
        type: 1,
      },
      {
        name: '韩国女歌手',
        url: '/discover/artist?id=7002',
        type: 2,
      },
      {
        name: '韩国组合/乐队',
        url: '/discover/artist?id=7003',
        type: 3,
      },
    ],
  },
  {
    title: '其他',
    area: 0,
    artists: [
      {
        name: '其他男歌手',
        url: '/discover/artist?id=4001',
        type: 1,
      },
      {
        name: '其他女歌手',
        url: '/discover/artist?id=4002',
        type: 2,
      },
      {
        name: '其他组合乐队',
        url: '/discover/artist?id=4003',
        type: 3,
      },
    ],
  },
]

// 搜索分类
export const searchCategories = [
  // '单曲', '歌手', '专辑', '视频', '歌词', '歌单', '主播电台', '用户'
  {
    title: '单曲',
    link: '/search/single?type=1',
  },
  {
    title: '歌手',
    link: '/search/singer?type=10',
  },
  {
    title: '专辑',
    link: '/search/album?type=11',
  },
  {
    title: '视频',
    link: '/search/video?type=12',
  },
  {
    title: '歌词',
    link: '/search/artist?type=13',
  },
  {
    title: '歌单',
    link: '/search/songs?type=14',
  },
  {
    title: '主播电台',
    link: '/search/dj?type=15',
  },
  {
    title: '用户',
    link: '/search/user?type=16',
  }
]
