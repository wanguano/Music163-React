import React, { memo } from 'react'
import { CategoryList, HeaderCategory } from './style'

import { dicoverMenu } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { useChangeDropBoxState , useGlobalKeyboardEvent} from '@/hooks/change-state'

export default memo(function JMDiscover(props) {
  // props/state
  const { route } = props

  // custom hook
  useGlobalKeyboardEvent()

  // 通过redux-thunk发送网络请求
  return (
    <HeaderCategory onClick={useChangeDropBoxState()}>
      <div className="top">
        <CategoryList className="w1100">
          {dicoverMenu.map((item) => {
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
