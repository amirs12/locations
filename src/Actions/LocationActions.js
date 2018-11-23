export const selectLocationItem = (id) => ({
  type: 'SELECT_LOCATION_ITEM',
  id
})

let nextLocationId = 1
export const saveLocation = (text, address, coordinates, category) => ({
  type: 'ADD_LOCATION',
  id: nextLocationId++,
  text,
  address,
  coordinates,
  category
})

export const closeAddLocation = () => ({
  type: 'CLOSE_ADD_LOCATION'
})

export const closeViewLocation = (id) => ({
  type: 'CLOSE_LOCATION_VIEW',
  id
})

export const saveEditLocation = (text, id) => ({
  type: 'SAVE_LOCATION_EDIT',
  text,
  id
})