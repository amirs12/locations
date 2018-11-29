const initialState = {
  filterState: "SHOW_ALL",
  filterCategoryOpen: false,
  sortState: "SHOW_BY_ABC",
  sortCategoryOpen: false,
  selectedPage: 'home'
}

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filterState: action.filter
      }
    case 'SET_VISIBILITY_SORT':
      return {
        ...state,
        sortState: action.filter
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
    case 'OPEN_SORT_BOX':
      return {
        ...state,
        sortCategoryOpen: true
      }
    case 'CLOSE_SORT_BOX':
      return {
        ...state,
        sortCategoryOpen: false
      }  
    case 'SELECT_PAGE':
      return {
        ...state,
        selectedPage: action.page
      }
    default:
      return state
  }
}

export default visibilityFilterReducer