import React, { memo } from 'react'
import { dicoverMenu } from '@/common/local-data'
import { CategoryList, NavBarWrapper } from './style'
import { NavLink } from 'react-router-dom'

function AppNavBar() {
  // other handle
  return (
    <NavBarWrapper>
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
    </NavBarWrapper>
  )
}

export default memo(AppNavBar)
