import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveLocation, closeAddLocation, openChooseCategory } from '../../../../Actions/LocationActions.js'
import ChooseCategory from '../../../../common/ChooseCategory/ChooseCategory.js'

import './AddLocations.css';

class AddLocations extends Component {
  render() {
    const { chooseCategoryOpen, categories } = this.props
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
          ).map(category =>
            category.text
          )
          if (!inputName.value.trim() || 
              !inputAddress.value.trim() ||
              !inputCoordinates.value.trim() ||
              !chosenCategories) {
            return
          }
          this.props.saveLocation(
            inputName.value, 
            inputAddress.value, 
            inputCoordinates.value,
            chosenCategories 
          )
          this.props.closeAddLocation()
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

export default connect(mapStateToProps, { saveLocation, closeAddLocation, openChooseCategory })(AddLocations)