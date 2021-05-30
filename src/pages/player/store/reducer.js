import { Map } from 'immutable';
import * as actionType from './actionType';
// 使用immutable管理state

const defaultState = Map({
  playList: [
  //   {
  //     name: '有何不可',
  //     id: 167876,
  //     pst: 0,
  //     t: 0,
  //     ar: [
  //       {
  //         id: 5771,
  //         name: '许嵩',
  //         tns: [],
  //         alias: [],
  //       },
  //     ],
  //     alia: [],
  //     pop: 100,
  //     st: 0,
  //     rt: '600902000007916021',
  //     fee: 8,
  //     v: 49,
  //     crbt: null,
  //     cf: '',
  //     al: {
  //       id: 16953,
  //       name: '自定义',
  //       picUrl:
  //         'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
  //       tns: [],
  //       pic_str: '18590542604286213',
  //       pic: 18590542604286212,
  //     },
  //     dt: 241840,
  //     h: {
  //       br: 320000,
  //       fid: 0,
  //       size: 9675799,
  //       vd: -21099,
  //     },
  //     m: {
  //       br: 192000,
  //       fid: 0,
  //       size: 5805497,
  //       vd: -18400,
  //     },
  //     l: {
  //       br: 128000,
  //       fid: 0,
  //       size: 3870346,
  //       vd: -16900,
  //     },
  //     a: null,
  //     cd: '1',
  //     no: 3,
  //     rtUrl: null,
  //     ftype: 0,
  //     rtUrls: [],
  //     djId: 0,
  //     copyright: 2,
  //     s_id: 0,
  //     mark: 8192,
  //     originCoverType: 0,
  //     single: 0,
  //     noCopyrightRcmd: null,
  //     mv: 0,
  //     mst: 9,
  //     cp: 14026,
  //     rtype: 0,
  //     rurl: null,
  //     publishTime: 1231516800000,
  //   },
  //   {
  //     name: '雅俗共赏',
  //     id: 411214279,
  //     pst: 0,
  //     t: 0,
  //     ar: [
  //       {
  //         id: 5771,
  //         name: '许嵩',
  //         tns: [],
  //         alias: [],
  //       },
  //     ],
  //     alia: [],
  //     pop: 100,
  //     st: 0,
  //     rt: null,
  //     fee: 8,
  //     v: 31,
  //     crbt: null,
  //     cf: '',
  //     al: {
  //       id: 34749138,
  //       name: '青年晚报',
  //       picUrl:
  //         'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
  //       tns: [],
  //       pic: 3431575794705764,
  //     },
  //     dt: 249621,
  //     h: {
  //       br: 320000,
  //       fid: 0,
  //       size: 9987177,
  //       vd: -22200,
  //     },
  //     m: {
  //       br: 192000,
  //       fid: 0,
  //       size: 5992323,
  //       vd: -19600,
  //     },
  //     l: {
  //       br: 128000,
  //       fid: 0,
  //       size: 3994896,
  //       vd: -17800,
  //     },
  //     a: null,
  //     cd: '1',
  //     no: 2,
  //     rtUrl: null,
  //     ftype: 0,
  //     rtUrls: [],
  //     djId: 0,
  //     copyright: 0,
  //     s_id: 0,
  //     mark: 8192,
  //     originCoverType: 0,
  //     single: 0,
  //     noCopyrightRcmd: null,
  //     mv: 5302271,
  //     rtype: 0,
  //     rurl: null,
  //     mst: 9,
  //     cp: 14026,
  //     publishTime: 1461723397683,
  //   },
  //   {
  //     name: '世间美好与你环环相扣',
  //     id: 1363948882,
  //     pst: 0,
  //     t: 0,
  //     ar: [
  //       {
  //         id: 31876221,
  //         name: '柏松',
  //         tns: [],
  //         alias: [],
  //       },
  //     ],
  //     alia: [],
  //     pop: 100,
  //     st: 0,
  //     rt: '',
  //     fee: 8,
  //     v: 19,
  //     crbt: null,
  //     cf: '',
  //     al: {
  //       id: 78938226,
  //       name: '听闻余生',
  //       picUrl:
  //         'https://p2.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg',
  //       tns: [],
  //       pic_str: '109951164071024476',
  //       pic: 109951164071024480,
  //     },
  //     dt: 191960,
  //     h: {
  //       br: 320000,
  //       fid: 0,
  //       size: 7681089,
  //       vd: -37574,
  //     },
  //     m: {
  //       br: 192000,
  //       fid: 0,
  //       size: 4608671,
  //       vd: -34959,
  //     },
  //     l: {
  //       br: 128000,
  //       fid: 0,
  //       size: 3072462,
  //       vd: -33277,
  //     },
  //     a: null,
  //     cd: '01',
  //     no: 1,
  //     rtUrl: null,
  //     ftype: 0,
  //     rtUrls: [],
  //     djId: 0,
  //     copyright: 0,
  //     s_id: 0,
  //     mark: 0,
  //     originCoverType: 0,
  //     single: 0,
  //     noCopyrightRcmd: null,
  //     mv: 10909947,
  //     rtype: 0,
  //     rurl: null,
  //     mst: 9,
  //     cp: 0,
  //     publishTime: 0,
  //   },
  //   {
  //     name: '着魔',
  //     id: 191134,
  //     pst: 0,
  //     t: 0,
  //     ar: [
  //       {
  //         id: 6472,
  //         name: '张杰',
  //         tns: [],
  //         alias: [],
  //       },
  //     ],
  //     alia: ['网游《恶魔法则》主题曲'],
  //     pop: 100,
  //     st: 0,
  //     rt: '',
  //     fee: 0,
  //     v: 10,
  //     crbt: null,
  //     cf: '',
  //     al: {
  //       id: 19307,
  //       name: '着魔',
  //       picUrl:
  //         'https://p1.music.126.net/i1KFnIt284AdIocVKQsIvw==/849922488315442.jpg',
  //       tns: [],
  //       pic: 849922488315442,
  //     },
  //     dt: 215562,
  //     h: {
  //       br: 320000,
  //       fid: 0,
  //       size: 8658796,
  //       vd: -4.76,
  //     },
  //     m: {
  //       br: 160000,
  //       fid: 0,
  //       size: 4346503,
  //       vd: -4.37,
  //     },
  //     l: {
  //       br: 96000,
  //       fid: 0,
  //       size: 2621586,
  //       vd: -4.41,
  //     },
  //     a: null,
  //     cd: '1',
  //     no: 1,
  //     rtUrl: null,
  //     ftype: 0,
  //     rtUrls: [],
  //     djId: 0,
  //     copyright: 2,
  //     s_id: 0,
  //     mark: 0,
  //     originCoverType: 1,
  //     originSongSimpleData: null,
  //     resourceState: true,
  //     single: 0,
  //     noCopyrightRcmd: null,
  //     mv: 0,
  //     mst: 9,
  //     rtype: 0,
  //     cp: 0,
  //     rurl: null,
  //     publishTime: 1270483200000,
  //   },
  //   {
  //     "name": "MOM",
  //     "id": 1387581250,
  //     "pst": 0,
  //     "t": 0,
  //     "ar": [
  //         {
  //             "id": 1155027,
  //             "name": "蜡笔小心",
  //             "tns": [],
  //             "alias": []
  //         }
  //     ],
  //     "alia": [],
  //     "pop": 100,
  //     "st": 0,
  //     "rt": "",
  //     "fee": 8,
  //     "v": 16,
  //     "crbt": null,
  //     "cf": "",
  //     "al": {
  //         "id": 81213684,
  //         "name": "MOM",
  //         "picUrl": "https://p2.music.126.net/ZOkr1NI-WGGRuc5-G_7-CA==/109951164332837488.jpg",
  //         "tns": [],
  //         "pic_str": "109951164332837488",
  //         "pic": 109951164332837490
  //     },
  //     "dt": 174807,
  //     "h": {
  //         "br": 320000,
  //         "fid": 0,
  //         "size": 6994591,
  //         "vd": -39909
  //     },
  //     "m": {
  //         "br": 192000,
  //         "fid": 0,
  //         "size": 4196772,
  //         "vd": -37283
  //     },
  //     "l": {
  //         "br": 128000,
  //         "fid": 0,
  //         "size": 2797862,
  //         "vd": -35559
  //     },
  //     "a": null,
  //     "cd": "01",
  //     "no": 1,
  //     "rtUrl": null,
  //     "ftype": 0,
  //     "rtUrls": [],
  //     "djId": 0,
  //     "copyright": 0,
  //     "s_id": 0,
  //     "mark": 64,
  //     "originCoverType": 1,
  //     "originSongSimpleData": null,
  //     "resourceState": true,
  //     "single": 0,
  //     "noCopyrightRcmd": null,
  //     "mst": 9,
  //     "cp": 0,
  //     "mv": 0,
  //     "rtype": 0,
  //     "rurl": null,
  //     "publishTime": 0
  // }
  ],
  currentSongIndex: 0,
  currentSong: {},
  playSequence: 0, // 0循环播放  1随机播放  2单曲循环
  firstLoad: true,
  lyricList: [],
  currentLyricIndex: 0,
  addSongDetail: {},
  playListCount: 5,
  hotComments: [],
  currentCommentTotal: 0
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index);
    case actionType.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.sequence);
    case actionType.CHANGE_FIRST_LOAD:
      return state.set('firstLoad', action.isLoad);
    case actionType.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyric);
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index);
    case actionType.CHANGE_ADD_SONG_DETAIL:
      return state.set('addSongDetail', action.addSongDetail);
    case actionType.CHANGE_PLAY_LIST_COUNT:
      return state.set('playListCount', action.count);
    case actionType.CHANGE_HOT_COMMENT:
      return state.set('hotComments', action.hotComments);
      case actionType.CHANGE_CURRENT_TOTAL:
        return state.set('currentCommentTotal', action.total);
    default:
      return state;
  }
}

export default reducer;
