import { combineReducers } from 'redux'
import addItemReducer from './addItemReducer'
import categoryItemReducer from './categoryItemReducer'
import locationItemReducer from './locationItemReducer'

const rootReducer = combineReducers({
  addItemReducer,  
  categoryItemReducer,
  locationItemReducer
})

export default rootReducer