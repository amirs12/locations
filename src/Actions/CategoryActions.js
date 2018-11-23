export const SELECT_CATEGORY_ITEM = 'SELECT_CATEGORY_ITEM'

export const selectCategoryItem = (id) => ({
  type: 'SELECT_CATEGORY_ITEM',
  id
})

let nextCategoryId = 1
export const saveCategory = text => ({
  type: 'ADD_CATEGORY',
  id: nextCategoryId++,
  text
})

export const closeAddCategory = () => ({
  type: 'CLOSE_ADD_CATEGORY'
})

export const closeViewCategory = (id) => ({
  type: 'CLOSE_CATEGORY_VIEW',
  id
})

export const saveEditCategory = (text, id) => ({
  type: 'SAVE_CATEGORY_EDIT',
  text,
  id
})
