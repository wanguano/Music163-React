import React, { memo } from 'react'
import { CategoryList, HeaderCategory } from './style'

import { dicoverMenu } from '@/common/local-data'
import { changeFocusStateAction } from '@/components/app-header/store/actionCreator.js'

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { useDispatch } from 'react-redux'

export default memo(function JMDiscover(props) {
  // props/state
  const { route } = props

  // redux hook
  const dispatch = useDispatch()

  // other function
  const changeFocusState = () => {
    dispatch(changeFocusStateAction(false)) 
  }

  // 通过redux-thunk发送网络请求
  return (
    <HeaderCategory onClick={() => changeFocusState()}>
      <div className="top">
        <CategoryList className="w1100">
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
