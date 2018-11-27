import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeChooseCategory } from '../../Actions/LocationActions.js'
import { pendingCategoryChoice } from '../../Actions/CategoryActions.js'

import './ChooseCategory.css';

class ChooseCategory extends Component {
    render() {
      const { categories } = this.props

      return (
        <div className="choose-category">
          <div className="choose-box">
            {categories.map(category =>
              <div key={category.id} 
                   style={{color: category.pendingCategory ? 'cyan' : 'white'}}
                   onClick={(e) => {
                     e.preventDefault()
                     this.props.pendingCategoryChoice(category.id)
                   }}
                   >
                <div>{category.text}</div>
              </div>
            )}
          </div>
          <button className="apply-button" 
              onClick={(e) => {
                e.preventDefault()
                this.props.closeChooseCategory()}}
          >Apply</button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
    categories: state.manageItemReducer.categories
  })
  
  export default connect(mapStateToProps, { closeChooseCategory, pendingCategoryChoice })(ChooseCategory)