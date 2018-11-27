import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Category from '../Category/Category.js'
import AddCategory from '../../containers/AddCategory.js'

import './Categories.css'

class Categories extends Component {
  render() {
    const { categories, addCategoryOpen } = this.props
    let addCategoryBox
    if (addCategoryOpen) {
      addCategoryBox = <AddCategory />
    }

    return (
      <div>
        <Header page="categories" name="My Categories"/>
        <article className="categories-box">
          {addCategoryBox}
          <div>
            {categories.map(category =>
              <Category
                key={category.id} categories={categories} 
                {...category}
              />
            )}
          </div>
        </article>
        <Footer page="categories"/>
      </div>
    )
  }
}  

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  addCategoryOpen: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  addCategoryOpen: state.manageItemReducer.addCategoryOpen
})

export default connect(mapStateToProps)(Categories)