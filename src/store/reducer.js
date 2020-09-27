import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'

// 多个reducer合并
const cRducer = combineReducers({
  recommend: recommendReducer
})

export default cRducer