import React, { memo } from 'react';
import { NotLogin } from './style';

export default memo(function JMMine() {
  let isLogin = false;
  return (
    <div>
      <NotLogin isLogin={isLogin} className="w980">
        <div className="show-no-login">
          <div className="not-login inner">
            <h2>登录网易云音乐</h2>
            <div className="detail">
              你可以关注明星和好友品味他们的私房歌单
              通过他们的动态发现更多精彩音乐
            </div>
            <div className="not-login btn-login">立即登录</div>
          </div>
        </div>
      </NotLogin>
    </div>
  );
});
