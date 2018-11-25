import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveEditLocation, closeEditLocation, openChooseCategory } from '../../../../Actions/LocationActions.js'
import ChooseCategory from '../../../../common/ChooseCategory/ChooseCategory.js'

import './LocationEdit.css';

class LocationEdit extends Component {
  render() {
    const { chooseCategoryOpen, categories, id } = this.props
    let inputName,
        inputAddress,
        inputCoordinates,
        chooseCategoryBox

    if (chooseCategoryOpen === true) {
      chooseCategoryBox = <ChooseCategory />
    }

    return (
      <div>
        <form className="location-form" onSubmit={e => {
          e.preventDefault()
          let chosenCategories = categories.filter(category => 
            (category.pendingCategory === true)
          )
          if (!inputName.value.trim() || 
              !inputAddress.value.trim() ||
              !inputCoordinates.value.trim() ||
              !chosenCategories) {
            return
          }
          this.props.saveEditLocation(
            id,
            inputName.value, 
            inputAddress.value, 
            inputCoordinates.value,
            chosenCategories 
          )
          this.props.closeEditLocation(id)
          inputName.value = ''
          inputAddress.value = ''
          inputCoordinates.value = ''
        }}>
          <input ref={node => inputName = node} className="location-input" placeholder="Location Name" autoFocus/>
          <input ref={node => inputAddress = node} className="location-input" placeholder="Address"/>
          <input ref={node => inputCoordinates = node} className="location-input" placeholder="Coordinates"/>
          <div className="choose-category">
            <div className="choose-title">Choose a Category </div>  
            <button className="choose-button" 
                    onClick={e => {
                      e.preventDefault()
                      this.props.openChooseCategory()
                    }}
              > + 
            </button>
            {chooseCategoryBox}
          </div>
          <button className="save-button" type="submit">Save</button>
        </form>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  categories: state.categoryItemReducer.categories,
  chooseCategoryOpen: state.locationItemReducer.chooseCategoryOpen
})

export default connect(mapStateToProps, { saveEditLocation, openChooseCategory, closeEditLocation })(LocationEdit)