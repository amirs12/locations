const initialState = {
  chooseCategoryOpen: false
}

const locationItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CHOOSE_CATEGORY':
      return {
        ...state,
        chooseCategoryOpen: true
      }  
    case 'CLOSE_CHOOSE_CATEGORY':
      return {
        ...state,
        chooseCategoryOpen: false
      }  
    default:
      return state
  }
}

export default locationItemReducer