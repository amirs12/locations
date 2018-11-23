const initialState = {
  addCategoryOpen: false,
  addLocationOpen: false
}

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_ADD_CATEGORY':
      return {
        ...state,
        addCategoryOpen: true
      }
    case 'CLOSE_ADD_CATEGORY':
      return {
        ...state,
        addCategoryOpen: false
      }
    case 'OPEN_ADD_LOCATION':
      return {
        ...state,
        addLocationOpen: true
      }
    case 'CLOSE_ADD_LOCATION':
      return {
        ...state,
        addLocationOpen: false
      }      
    default:
      return state
  }
}

export default addItemReducer