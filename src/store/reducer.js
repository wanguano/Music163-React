import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as toplistReducer } from '../pages/discover/child-pages/toplist/store'

// 多个reducer合并
const cRducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  toplist: toplistReducer
})

export default cRducer