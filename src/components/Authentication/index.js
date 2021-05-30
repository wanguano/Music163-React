import React, { memo, useEffect } from 'react'
import propTypes from 'prop-types'
import { message, Skeleton } from 'antd'

function Auth(props) {
  // props/state
  const { flag } = props

  // other hook
  useEffect(() => {
    // 没登录
    if (!flag) {
      //   message.warning('请先登录, 再看每日推荐歌单', {
      //     onClose() {
      //       console.log('message关闭')
      //     }
      //   })
      message.loading('请先登录, 再看每日推荐歌单', 2).then(() => {
        // props.history.push('/')
        props.to()
        props.showModal()
      })
    }
  }, [flag, props])

  return (
    <div style={{ display: !flag ? 'block' : 'none' }}>
      <Skeleton active  />
    </div>
  )
}

Auth.propTypes = {
  flag: propTypes.bool.isRequired,
}

export default memo(Auth)
