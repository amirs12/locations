import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveEditCategory } from '../../../../Actions/CategoryActions.js'

import './CategoryEdit.css';

class CategoryEdit extends Component {
    render() {
        let input
        const { text, id } = this.props
      return (
        <div className="category-edit">
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            this.props.saveEditCategory(input.value, id)
            input.value = ''
            }}>
            <input ref={node => input = node} name="edit-ctg" id="edit-ctg" placeholder={text} autoFocus/>
            <button type="submit">Save</button>
          </form>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.addItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { saveEditCategory })(CategoryEdit)