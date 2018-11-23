import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeViewCategory } from '../../../../Actions/CategoryActions.js'

import './CategoryDetails.css';

class CategoryDetails extends Component {
    render() {
      const { text, id } = this.props
      return (
        <div className="category-details">
          <div>{text}</div>
          <button  className="done-button" onClick={() => this.props.closeViewCategory(id)}>Done</button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.addItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { closeViewCategory })(CategoryDetails)