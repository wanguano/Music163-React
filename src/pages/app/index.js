import React, { memo, Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import { Button, Skeleton } from 'antd';
import ThemeDialog from '@/components/theme-dialog/index';
import initLoginInfo from '@/config/token.js';
import { setLoginInfo, getLoginInfo } from '@/utils/secret-key';
import { getLoginProfileInfo } from '@/components/theme-login/store/actionCreator';

export default memo(function APPWrapper() {
  // props/state
  const [isShow, setIsShow] = useState(false);

  // redux hook
  const dispatch = useDispatch();
  console.log('初始化登录~~~');

  // other handle
  // 初始化
  const initLogin = () => {
    // 存在登录信息
    if (localStorage.getItem('loginInfo') != null) {
      const { username, password } = getLoginInfo('loginInfo');
      username && password
        ? dispatch(getLoginProfileInfo(username, password))
        : console.log('当前登录的默认信息');
    }
    // 不存在登录信息
    else {
      setLoginInfo('loginInfo', initLoginInfo);
    }
  };
  initLogin();

  // other function
  const handleOk = () => {
    setIsShow(false);
  };

  const handleCancel = () => {
    setIsShow(false);
  };


  return (
    <>
      <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
      <ThemeDialog
        controlShow={isShow}
        title="上传音乐"
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <h2>hello dialog</h2>
        <h3>上传音乐</h3>
      </ThemeDialog>
      <Button onClick={() => setIsShow(!isShow)}>点我</Button>
    </>
  );
});
