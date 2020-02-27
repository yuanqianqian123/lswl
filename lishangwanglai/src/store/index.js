import {createStore, combineReducers} from 'redux'
import indexReducer from './index-reducer'
import staticReducer from './static-reducer'
const roootReducer = combineReducers({staticReducer,indexReducer})
const store=createStore(roootReducer)
export default store