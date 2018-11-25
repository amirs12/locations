const initialState = {
  locations: [],
  chooseCategoryOpen: false
}

const locationItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
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
    case 'SELECT_LOCATION_ITEM':
      return {
        ...state,
        locations: state.locations.map(location =>
          (location.id === action.id)
          ? {...location, selected: !location.selected}
          : location 
        )  
      }
    case 'DELETE_LOCATION':
      return {
        ...state,
        locations: state.locations.map(location =>
          (location.selected === true)
          ? {...location, deleted: true}
          : location
        )
      }
    case 'VIEW_LOCATION':
      return {
        ...state,
        locations: state.locations.map(location =>
          (location.selected === true)
          ? {...location, viewMode: true, editMode: false}
          : location 
        )  
      }
    case 'CLOSE_LOCATION_VIEW':
      return {
        ...state,
        locations: state.locations.map(location =>
          (location.id === action.id)
          ? {...location, viewMode: false, selected: false}
          : location 
        )  
      }  
    case 'EDIT_LOCATION':
      return {
        ...state,
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
        locations: state.locations.map(location =>
          (location.id === action.id)
          ? {...location, editMode: false, selected: false}
          : location 
        )  
      }   
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