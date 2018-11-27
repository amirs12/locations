import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeViewCategory } from '../../../../../../Actions/CategoryActions.js'

import './CategoryDetails.css';

class CategoryDetails extends Component {
    render() {
      const { text, id } = this.props
      return (
        <div className="category-details">
          <div className="details-property">
            <div className="details-title">Location Name</div>
            <div>{text}</div>
          </div>  
          <button 
            className="done-button" 
            onClick={() => this.props.closeViewCategory(id)}
            >Close
          </button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.categoryItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { closeViewCategory })(CategoryDetails)