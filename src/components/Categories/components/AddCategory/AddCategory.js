import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCategory, closeAddCategory } from '../../../../Actions/CategoryActions.js'

import './AddCategory.css'

class AddCategory extends Component {
  render() {
    let input

    return (
      <div>
        <form 
          className="category-form" 
          onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.saveCategory(input.value)
          this.props.closeAddCategory()
          input.value = ''
          }}
        >
          <div className="category-property">
            <div className="category-title">Category Name</div>
            <input 
              ref={node => input = node} 
              className="category-input" 
              placeholder="Category Name" 
              autoFocus
            />
          </div>
          <div className="add-category-buttons">
            <button className="save-button" type="submit">Save</button>
            <button 
              className="cancel-button" 
              onClick={e => {
                e.preventDefault()
                this.props.closeAddCategory()
              }}
            >Cancel
            </button>
          </div>    
        </form>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
//  addBoxOpen: state.categoryItemReducer.addBoxOpen
})

export default connect(mapStateToProps, { saveCategory, closeAddCategory })(AddCategory)