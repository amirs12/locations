const initialState = {
  categories: [{
    id: 0, 
    text: "hard coded category", 
    selected: false, 
    viewMode: false, 
    editMode: false}]
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
    default:
      return state
  }
}

export default categoryItemReducer