import React, { memo } from 'react'
import { parseTime } from '../../../../../../utils/format-utils'
import { DateWrapper } from './style'

export default memo(function DateComponent() {
  const day = parseTime(new Date(), '{d}')
  let week = '星期' + '日一二三四五六'.charAt(new Date().getDay())

  return (
    <DateWrapper className="date">
      <div className="head">{week}</div>
      <div className="day">{day}</div>
      <div className="mask date"></div>
    </DateWrapper>
  )
})
