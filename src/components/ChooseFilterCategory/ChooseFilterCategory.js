import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closefilterBox, savefilteredCategories } from '../../Actions/Actions.js'

import './ChooseFilterCategory.css';

class ChooseFilterCategory extends Component {
    render() {
      const { categories } = this.props

      return (
        <div className="choose-filter-category">
          {categories.map(category =>
            <div key={category.id} 
                  style={{color: category.pendingCategory ? 'cyan' : 'white'}}
                  onClick={(e) => {
                    e.preventDefault()
                    this.props.savefilteredCategories(categories, category.id)
                    this.props.closefilterBox()
                  }}
                  >
              <div className="category-options">{category.text}</div>
            </div>
          )}
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
    categories: state.manageItemReducer.categories
  })
  
  export default connect(mapStateToProps, { closefilterBox, savefilteredCategories })(ChooseFilterCategory)