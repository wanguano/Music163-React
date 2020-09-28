// 1. 第三方开库
import React, { memo, useEffect } from 'react'

// 2. 功能性东西
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannersAction } from '../../store/actionCreator'

// 3. 导入的组件
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

export default memo(function TopBanners() {
  // redux Hook 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(
    state => ({
      // topBanners: state.get('recommend').get('topBanners')
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他Hook
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <BannerWrapper>
      <div className="banner w980">
        <BannerLeft>
          <Carousel effect="fade" autoplay={true}>
            {topBanners.map(item => {
              return (
                <div key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn"></button>
          <button className="btn"></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
