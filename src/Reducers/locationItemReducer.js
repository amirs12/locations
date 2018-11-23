const initialState = {
  locations: [{
    id: 0, 
    text: "hard coded location", 
    address: "hard coded address",
    coordinates: "hard coded coordinates",
    category: "hard coded category",
    selected: false, 
    viewMode: false, 
    editMode: false
  }]
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
              category: action.category,
              selected: false, editMode: false, viewMode: false
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
          ? {...location, viewMode: false}
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
          ? {...location, editMode: false, text: action.text}
          : location 
        )
      }
    default:
      return state
  }
}

export default locationItemReducer