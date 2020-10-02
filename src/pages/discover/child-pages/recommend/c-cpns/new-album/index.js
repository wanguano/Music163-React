import React, { memo } from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'

export default memo(function NewAlbum() {
  return (
    <div>
      <ThemeHeaderRcm title="新碟上架" />
      <h2>新碟上架组件</h2>
    </div>
  )
})
