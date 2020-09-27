import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannersAction } from './store/actionCreator'

function JMRecommend() {
  // redux Hook 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <div>
      <h2>JMRecommend</h2>
      <h3>{topBanners.length}</h3>
    </div>
  )
}
export default memo(JMRecommend)

// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { getTopBannersAction } from './store/actionCreator'

// function JMRecommend(props) {
//   const { getBanners, topBanners } = props
//   // 使用react-redux的connect函数,将依赖的state和dispatch传递给connect
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>JMRecommend</h2>
//       <h3>{topBanners.length}</h3>
//     </div>
//   )
// }

// // 定义依赖的state
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners,
// })

// // 定义依赖的dispatch
// const mapDispatchToProps = dispatch => ({
//   getBanners() {
//     dispatch(getTopBannersAction())
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(JMRecommend))
