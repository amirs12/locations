import { combineReducers } from 'redux'
import categoryItemReducer from './categoryItemReducer'
import locationItemReducer from './locationItemReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

const rootReducer = combineReducers({
  categoryItemReducer,
  locationItemReducer,
  visibilityFilterReducer
})

export default rootReducer