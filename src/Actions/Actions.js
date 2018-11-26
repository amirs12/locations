export const OPEN_ADD_CATEGORY = 'OPEN_ADD_CATEGORY'
export const CLOSE_ADD_CATEGORY = 'CLOSE_ADD_CATEGORY'
export const SELECT_CATEGORY_PAGE = 'SELECT_CATEGORY_PAGE'
export const SortFilters = {
  SHOW_BY_CATEGORY: 'SHOW_BY_CATEGORY',
  SHOW_BY_ABC: 'SHOW_BY_ABC'
}

export const VisibilityFilters = {
  FILTER_ALL: 'FILTER_ALL',
  FILTER_BY_CATEGORY: 'FILTER_BY_CATEGORY',
}

export const selectPage = page => ({
  type: page
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const openfilterBox = () => ({
  type: 'OPEN_FILTER_BOX'
})

export const pendingFilteredCategory = id => ({
  type: 'PENDING_FILTERED_CATEGORY',
  id
})

export const savefilteredCategories = (categories, id) => ({
  type: 'SAVE_FILTERED_CATEGORIS',
  categories, 
  id
})

export const closefilterBox = () => ({
  type: 'CLOSE_FILTER_BOX'
})

export const viewItem = page => {
  switch (page) {
    case 'categories':
      return {
        type: 'VIEW_CATEGORY'
      }
    case 'locations':
      return { 
        type: 'VIEW_LOCATION'
      }    
    default:
      return {
        type: 'home'
      }
  }
}

export const addItem = page => {
  switch (page) {
    case 'categories':
      return {
        type: 'OPEN_ADD_CATEGORY'
      }
    case 'locations':
      return { 
        type: 'OPEN_ADD_LOCATION'
      }    
    default:
      return {
        type: 'home'
      }
  }
}

export const deleteItem = page => {
  switch (page) {
    case 'categories':
      return {
        type: 'DELETE_CATEGORY'
      }
    case 'locations':
      return { 
        type: 'DELETE_LOCATION'
      }    
    default:
      return {
        type: 'home'
      }
  } 
}

export const editItem = page => {
  switch (page) {
    case 'categories':
      return {
        type: 'EDIT_CATEGORY'
      }
    case 'locations':
      return { 
        type: 'EDIT_LOCATION'
      }    
    default:
      return {
        type: 'home'
      }
  }
}  

export const selectPageItem = page => {
  return {
    type: 'SELECT_PAGE',
    page
  }
}  
