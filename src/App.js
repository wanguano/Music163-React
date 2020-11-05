import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'
import store from './store'
// import { useChangeDropBoxState } from '@/hooks/change-state'

import { Spin } from 'antd'
import JMAppHeader from 'components/app-header'
import JMAppFooter from 'components/app-footer'
import JMAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {

  // const changeFocusState = useChangeDropBoxState();
  // document.addEventListener('keydown', (e) => {
  //   if(e.ctrlKey && e.key === 'k')  {
  //     console.log('ctrl + k')
  //     // 阻止默认事件
  //     e.preventDefault()
  //     changeFocusState(true)
  //   }
  // })

  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
        <JMAppFooter />
        <JMAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
