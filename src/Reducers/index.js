import { combineReducers } from 'redux'
import manageItemReducer from './manageItemReducer'
import locationItemReducer from './locationItemReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

const rootReducer = combineReducers({
  manageItemReducer,
  locationItemReducer,
  visibilityFilterReducer
})

export default rootReducer