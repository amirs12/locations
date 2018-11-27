const initialState = {
  locations: [],
  categories: [{
    id: 0, 
    text: "Home", 
    selected: false, 
    pendingCategory: false,
    filteredCategory: false,
    viewMode: false, 
    editMode: false
  }, {
    id: 1, 
    text: "Work", 
    selected: false, 
    pendingCategory: false,
    filteredCategory: false,
    viewMode: false, 
    editMode: false
  }, {
    id: 2, 
    text: "Restaurants", 
    selected: false, 
    pendingCategory: false,
    filteredCategory: false,
    viewMode: false, 
    editMode: false
  }
],
  aCategorySelected: false,
  aLoactionSelected: false,
  selectedAction: '',
  addCategoryOpen: false,
  addLocationOpen: false
}

const manageItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY_ITEM':
      return {
        ...state,
        addCategoryOpen: false,
        selectedAction: '',
        aCategorySelected: !state.aCategorySelected,
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, selected: !category.selected}
          : {...category, selected: false, viewMode: false, editMode: false} 
        )  
      }
    case 'SELECT_LOCATION_ITEM':
      return {
        ...state,
        addLocationOpen: false,
        selectedAction: '',
        aLoactionSelected: !state.aLoactionSelected,
        locations: state.locations.map(location =>
          (location.id === action.id)
          ? {...location, selected: !location.selected}
          : {...location, selected: false, editMode: false, viewMode: false} 
        )  
      }
    case 'OPEN_ADD_CATEGORY':
      return {
        ...state,
        selectedAction: 'Add',
        addCategoryOpen: true,
        categories: state.categories.map(category => (
          {...category, selected: false, viewMode: false, editMode: false})
        )
      }
    case 'SAVE_CATEGORY':
      return {
        ...state,
        categories: 
          [...state.categories, 
          {id: action.id, text: action.text, selected: false}]  
      }
    case 'CLOSE_ADD_CATEGORY':
      return {
        ...state,
        selectedAction: '',
        addCategoryOpen: false
      }  
    case 'VIEW_CATEGORY':
      return {
        ...state,
        addCategoryOpen: false,
        selectedAction: 'View',
        categories: state.categories.map(category =>
          (category.selected === true)
          ? {...category, viewMode: true, editMode: false}
          : category 
        )  
      }
    case 'CLOSE_CATEGORY_VIEW':
      return {
        ...state,
        selectedAction: '',
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, viewMode: false}
          : category 
        )  
      }  
    case 'EDIT_CATEGORY':
      return {
        ...state,
        addCategoryOpen: false,
        selectedAction: 'Edit',
        categories: state.categories.map(category =>
          (category.selected === true)
          ? {...category, editMode: true, viewMode: false}
          : {...category, viewMode: false} 
        )  
      }    
    case 'SAVE_CATEGORY_EDIT':
      return {
        ...state,
        selectedAction: '',
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, editMode: false, text: action.text}
          : category 
        )
      }
    case 'CLOSE_CATEGORY_EDIT':
      return {
        ...state,
        selectedAction: '',
        categories: state.categories.map(category =>
          (category.id === action.id)
          ? {...category, editMode: false}
          : category
        )
      }  
    case 'DELETE_CATEGORY':
      return {
        ...state,
        selectedAction: '',
        categories: state.categories.map(category =>
          (category.selected === true)
          ? {...category, deleted: true}
          : category
        )
      }
    case 'OPEN_ADD_LOCATION':
      return {
        ...state,
        selectedAction: 'Add',
        addLocationOpen: true,
        locations: state.locations.map(location => (
          {...location, selected: false, viewMode: false, editMode: false})
        )
      }
    case 'SAVE_LOCATION':
      return {
        ...state,
        locations: 
          [...state.locations, {
              id: action.id, 
              text: action.text, 
              address: action.address,
              coordinates: action.coordinates,
              chosenCategories: action.chosenCategories,
              selected: false, 
              editMode: false, 
              viewMode: false
        }]  
      } 
    case 'CLOSE_ADD_LOCATION':
      return {
        ...state,
        selectedAction: '',
        categories: state.categories.map(category => 
          (category.pendingCategory === true)
          ? {...category, pendingCategory: false}
          : category
        ),
        aLoactionSelected: false,
        addLocationOpen: false
      }
    case 'VIEW_LOCATION':
      return {
        ...state,
        selectedAction: 
          state.aLoactionSelected === false
          ? ''
          : 'View',
        addLocationOpen: false,
        locations: state.locations.map(location =>
          (location.selected === true)
          ? {...location, viewMode: true, editMode: false}
          : {...location, editMode: false} 
        )  
      }
    case 'CLOSE_LOCATION_VIEW':
      return {
        ...state,
        selectedAction: '',
        aLoactionSelected: false,
        locations: state.locations.map(location =>
          ({...location, viewMode: false, selected: false})
        )  
      }  
    case 'EDIT_LOCATION':
      return {
        ...state,
        selectedAction: 
          state.aLoactionSelected === false
          ? ''
          : 'Edit',
        aLoactionSelected: false,
        locations: state.locations.map(location =>
          (location.selected === true)
          ? {...location, editMode: true, viewMode: false}
          : location 
        )  
      }    
    case 'SAVE_LOCATION_EDIT':
      return {
        ...state,
        locations: state.locations.map(location =>
          (location.id === action.id)
          ? {...location, 
            id: action.id, 
            text: action.text, 
            address: action.address,
            coordinates: action.coordinates,
            chosenCategories: action.chosenCategories,
            selected: false, 
            editMode: false, 
            viewMode: false
          }
          : location 
        )
      }
    case 'CLOSE_EDIT_LOCATION':
      return {
        ...state,
        selectedAction: '',
        aLoactionSelected: false,
        locations: state.locations.map(location =>
          (location.id === action.id)
          ? {...location, editMode: false, selected: false}
          : location 
        )  
      }
    case 'DELETE_LOCATION':
      return {
        ...state,
        selectedAction: '',
        aLoactionSelected: false,
        locations: state.locations.map(location =>
          (location.selected === true)
          ? {...location, deleted: true}
          : location
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
    default:
      return state
  }
}

export default manageItemReducer