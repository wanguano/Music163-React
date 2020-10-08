import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'
import { reducer as playerReducer } from "../pages/player/store";

// 多个reducer合并
const cRducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cRducer