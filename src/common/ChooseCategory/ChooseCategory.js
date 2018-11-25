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
                   style={{color: category.pendingCategory ? 'red' : 'black'}}
                   onClick={() => this.props.pendingCategoryChoice(category.id)}
                   >
                <div>{category.text}</div>
              </div>
            )}
          </div>
          <button className="done-button" onClick={() => this.props.closeChooseCategory()}>Done</button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
    categories: state.categoryItemReducer.categories
  })
  
  export default connect(mapStateToProps, { closeChooseCategory, pendingCategoryChoice })(ChooseCategory)