import React, { memo } from 'react'

export default memo(function JMSingle(props) {
  console.log(props)
  console.log('123')
  return (
    <div>
      <h2>Single</h2>
    </div>
  )
})
