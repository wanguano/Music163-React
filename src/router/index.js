import React from 'react'
import { Redirect } from 'react-router-dom'

const JMDiscover = React.lazy(() => import('@/pages/discover'))
const JMRecommend = React.lazy(() =>
  import('@/pages/discover/child-pages/recommend')
)
const JMToplist = React.lazy(() =>
  import('@/pages/discover/child-pages/toplist')
)
const JMSongs = React.lazy(() => import('@/pages/discover/child-pages/songs'))
const JMDjradio = React.lazy(() =>
  import('@/pages/discover/child-pages/djradio')
)
const JMArtist = React.lazy(() => import('@/pages/discover/child-pages/artist'))
const JMAlbum = React.lazy(() => import('@/pages/discover/child-pages/album'))

const JMSongDetail = React.lazy(() => import('@/pages/player'))
const JMFriend = React.lazy(() => import('@/pages/friend'))
const JMMine = React.lazy(() => import('@/pages/mine'))

const JMSearch = React.lazy(() => import('@/pages/search'))
const JMSingle = React.lazy(() => import('@/pages/search/child-pages/single'))
const JMSinger = React.lazy(() => import('@/pages/search/child-pages/singer'))
const JMSearchAlbum = React.lazy(() => import('@/pages/search/child-pages/album'))

// import JMDiscover from '@/pages/discover'
// import JMRecommend from '../pages/discover/child-pages/recommend'
// import JMToplist from '../pages/discover/child-pages/toplist'
// import JMSongs from '../pages/discover/child-pages/songs'
// import JMDjradio from '../pages/discover/child-pages/djradio'
// import JMArtist from '../pages/discover/child-pages/artist'
// import JMAlbum from '../pages/discover/child-pages/album'
// import JMSongDetail from '../pages/player'

// import JMFriend from '@/pages/friend'
// import JMMine from '@/pages/mine'
// import { Redirect } from 'react-router-dom'

const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/discover',
    component: JMDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: '/discover/recommend', component: JMRecommend },
      { path: '/discover/ranking', component: JMToplist },
      {
        path: '/discover/ranking',
        component: JMToplist,
      },
      { path: '/discover/album', component: JMAlbum },
      { path: '/discover/djradio', component: JMDjradio },
      { path: '/discover/artist', component: JMArtist },
      { path: '/discover/songs', component: JMSongs },
      { path: '/discover/song', component: JMSongDetail },
    ],
  },
  { path: '/mine', component: JMMine },
  { path: '/friend', component: JMFriend },
  {
    path: '/search',
    component: JMSearch,
    routes: [
      {
        path: '/search',
        exact: true,
        render: () => <Redirect to="/search/single?song=&type=1" />,
      },
      { path: '/search/single', component: JMSingle },
      { path: '/search/singer/', component: JMSinger},
      { path: '/search/album/', component: JMSearchAlbum}
    ]
  },
]

export default routes
