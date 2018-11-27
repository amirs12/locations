import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveEditCategory, closeEditCategory } from '../../../../../../Actions/CategoryActions.js'

import './CategoryEdit.css';

class CategoryEdit extends Component {
    render() {
        let input
        const { id } = this.props
      
      return (
        <div className="category-edit">
          <form 
            className="category-form" 
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                  return
              }
              this.props.saveEditCategory(input.value, id)
              this.props.closeEditCategory(id)
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
                    this.props.closeEditCategory()
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
    addBoxOpen: state.categoryItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { saveEditCategory, closeEditCategory })(CategoryEdit)