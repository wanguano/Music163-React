import React, { memo } from 'react'
import { CategoryList, HeaderCategory } from './style'

import { dicoverMenu } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function JMDiscover(props) {
  const { route } = props
  
  // 1.通过redux-thunk发送网络请求
  return (
    <HeaderCategory>
      <div className="w1100 top">
        <CategoryList>
          {dicoverMenu.map(item => {
            return (
              <li key={item.title} className="item">
                <NavLink to={item.link} activeClassName="menu-active">
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </CategoryList>
      </div>
      {renderRoutes(route.routes)}
    </HeaderCategory>
  )
})
