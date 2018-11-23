import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCategory, closeAddCategory } from '../Actions/CategoryActions.js'

class AddCategory extends Component {
  render() {
    let input

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.saveCategory(input.value)
          this.props.closeAddCategory()
          input.value = ''
        }}>
          <input ref={node => input = node} name="add-ctg" id="add-ctg" placeholder="Add Category" autoFocus/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
//  addBoxOpen: state.addItemReducer.addBoxOpen
})

export default connect(mapStateToProps, { saveCategory, closeAddCategory })(AddCategory)