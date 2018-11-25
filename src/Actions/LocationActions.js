export const selectLocationItem = (id) => ({
  type: 'SELECT_LOCATION_ITEM',
  id
})

let nextLocationId = 0
export const saveLocation = (text, address, coordinates, chosenCategories) => ({
  type: 'ADD_LOCATION',
  id: nextLocationId++,
  text,
  address,
  coordinates,
  chosenCategories
})

export const closeAddLocation = () => ({
  type: 'CLOSE_ADD_LOCATION'
})

export const closeViewLocation = (id) => ({
  type: 'CLOSE_LOCATION_VIEW',
  id
})

export const saveEditLocation = ( id, text, address, coordinates, chosenCategories) => ({
  type: 'SAVE_LOCATION_EDIT',
  id,
  text,
  address,
  coordinates,
  chosenCategories
})

export const closeEditLocation = (id) => ({
  type: 'CLOSE_EDIT_LOCATION',
  id
})

export const openChooseCategory = () => ({
  type: 'OPEN_CHOOSE_CATEGORY'
})

export const closeChooseCategory = () => ({
  type: 'CLOSE_CHOOSE_CATEGORY'
})