import React, { memo } from 'react'
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import routes from './router'
import { HashRouter } from 'react-router-dom'

import JMAppHeader from 'components/app-header'
import JMAppFooter from 'components/app-footer'

import store from './store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        {renderRoutes(routes)}
        <JMAppFooter />
      </HashRouter>
    </Provider>
  )
})
