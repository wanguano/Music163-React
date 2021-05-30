import React, { useEffect } from 'react'
import { getBanners } from '@/service/test'
import { useDispatch, useSelector } from 'react-redux'
import { change_banners } from './store/actionCreator'

export default function Test() {
  const diaptch = useDispatch()
  /* 从service调接口并拿到数据 */
  useEffect(() => {
    getBanners().then((res) => {
      diaptch(change_banners(res))
    })
  }, [diaptch])
  // redux
  const { banners } = useSelector((state) => ({
    banners: state.getIn(['testReducer', 'testBanners']),
  }))

  useEffect(() => {
    console.log(banners)
  }, [banners])
  return <div>123</div>
}
