import React, { memo } from 'react'
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'
import store from './store'

import JMAppHeader from 'components/app-header'
import JMAppFooter from 'components/app-footer'
import JMAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        {renderRoutes(routes)}
        <JMAppFooter />
        <JMAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
