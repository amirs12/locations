const initialState = {
  categories: [{
    id: 0, 
    text: "hard coded category", 
    selected: false, 
    pendingCategory: false,
    filteredCategory: false,
    viewMode: false, 
    editMode: false
  }],
  addCategoryOpen: false,
  addLocationOpen: false
}

const categoryItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: 
          [...state.categories, 
          {id: action.id, text: action.text, selected: false, editMode: false}]  
      }
    case 'SELECT_CATEGORY_ITEM':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, selected: !category.selected}
          : category 
        )  
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.selected === true)
          ? {...category, deleted: true}
          : category
        )
      }  
    case 'VIEW_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.selected === true)
          ? {...category, viewMode: true, editMode: false}
          : category 
        )  
      }
    case 'CLOSE_CATEGORY_VIEW':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, viewMode: false}
          : category 
        )  
      }  
    case 'EDIT_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.selected === true)
          ? {...category, editMode: true, viewMode: false}
          : category 
        )  
      }    
    case 'SAVE_CATEGORY_EDIT':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, editMode: false, text: action.text}
          : category 
        )
      }
    case 'PENDING_CATEGORY_ITEM':
      return {
        ...state,
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, pendingCategory: !category.pendingCategory}
          : category 
        )  
      }
    case 'SAVE_FILTERED_CATEGORIS':
      return {
        ...state,
        categoryTofilter: action.categories[action.id].text
      }
    case 'CLOSE_ADD_LOCATION':
      return {
        ...state,
        categories: state.categories.map(category => 
          (category.pendingCategory === true)
          ? {...category, pendingCategory: false}
          : category
        ),
        addLocationOpen: false
      }
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
    default:
      return state
  }
}

export default categoryItemReducer