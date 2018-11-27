import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'
import CategoryEdit from './components/CategoryEdit/CategoryEdit'
import { selectCategoryItem } from '../../Actions/CategoryActions'

import './Category.css';

class Category extends Component {
  render() {
    const { categories, selected, text, id } = this.props
    let detailsBox,
        editBox

    if (categories[id].deleted === true) {
      return <div></div>
    } else {
      if (categories[id].viewMode === true) {
        detailsBox = <CategoryDetails text={text} id={id}/>
      }
      if (categories[id].editMode === true) {
        editBox = <CategoryEdit text={text} id={id}/>
      }
    }

    return (
      <div className="category-item" 
           onClick={() => this.props.selectCategoryItem(id)}
           style={{color: selected ? 'cyan' : 'white'}}
           >
        <div className="category-text">{text}</div>
        <div>{detailsBox}</div>
        <div>{editBox}</div>    
      </div>
    )
  }  
}

Category.propTypes = {
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  addCategoryOpen: state.manageItemReducer.addCategoryOpen,
})

export default connect(mapStateToProps, { selectCategoryItem })(Category)