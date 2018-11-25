const initialState = {
  visibilityFilterState: "SHOW_ALL",
  filterCategoryOpen: false
}

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilterState: action.filter
      }
    case 'OPEN_FILTER_BOX':
      return {
        ...state,
        filterCategoryOpen: true
      }
    case 'CLOSE_FILTER_BOX':
      return {
        ...state,
        filterCategoryOpen: false
      }  
    default:
      return state
  }
}

export default visibilityFilterReducer