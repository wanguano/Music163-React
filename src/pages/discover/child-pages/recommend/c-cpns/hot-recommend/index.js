import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import { HotRecommendWrapper } from './style'
import ThemeHeaderRmc from 'components/theme-header-rcm'
import { getHostBannersAction } from '../../store/actionCreator'
import SongCover from 'components/song-cover'

export default memo(function HotRecommend(props) {
  // state
  const { history } = props

  // redux
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )

  // other hooks
  useEffect(() => {
    dispatch(getHostBannersAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  // other function
  const handleKeyWordClick = (item) => {
    history.push(`/discover/songs?albumName=${item}`)
  }

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRmc
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        keywordsClick={(item) => handleKeyWordClick(item)}
      />
      <div className="recommend-list">
        {hotRecommends &&
          hotRecommends.map((item) => {
            return (
              <SongCover key={item.id} info={item} className="recommend-list">
                {item.name}
              </SongCover>
            )
          })}
      </div>
    </HotRecommendWrapper>
  )
})
