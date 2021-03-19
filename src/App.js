import React, { memo } from 'react';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';
import store from './store';
import { BackTop } from 'antd';
import JMAppHeader from 'components/app-header';
import JMAppFooter from 'components/app-footer';
import JMAppPlayerBar from './pages/player/app-player-bar';
import AppWrapper from './pages/app';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        {/* Router路由映射 */}
        <AppWrapper />
        <JMAppFooter />
        <JMAppPlayerBar />
        {/* 返回顶部 */}
        <BackTop />
      </HashRouter>
    </Provider>
  );
});
