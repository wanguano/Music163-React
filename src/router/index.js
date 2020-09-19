import JMDiscover from '@/pages/discover'
import JMFriend from '@/pages/friend'
import JMMine from '@/pages/mine'

const routes = [
  { path: '/', component: JMDiscover, exact: true },
  { path: '/mine', component: JMMine },
  { path: '/friend', component: JMFriend },
]

export default routes
