import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveLocation, closeAddLocation, openChooseCategory } from '../../../../Actions/LocationActions.js'
import ChooseCategory from '../../../../common/ChooseCategory/ChooseCategory.js'

import './AddLocations.css';

class AddLocations extends Component {
  componentWillMount() {
    this.props.openChooseCategory()
  }

  render() {
    const { categories } = this.props
    let inputName = '',
        inputAddress,
        inputCoordinates

    return (
      <div>
        <form 
          className="location-form" 
          onSubmit={e => {
            e.preventDefault()
            let chosenCategories = categories.filter(category => 
              (category.pendingCategory === true)
            ).map(category =>
              category.text
            )
            if (!inputName.value.trim() || 
                !inputAddress.value.trim() ||
                !inputCoordinates.value.trim() ||
                chosenCategories.length < 1) {
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
          }}
        >
          <div className="form-property">
            <div className="property-title">Location Name</div>
            <input ref={node => inputName = node} className="location-input" placeholder="Location Name" autoFocus/>
          </div>
          <div className="form-property">
            <div className="property-title">Address</div>
            <input ref={node => inputAddress = node} className="location-input" placeholder="Address"/>
          </div>
          <div className="form-property">
            <div className="property-title">Coordinates</div>
            <input ref={node => inputCoordinates = node} className="location-input" placeholder="Coordinates"/>
          </div>
          <div className="form-property">
            <div className="choose-title">Choose a Category </div>  
            <ChooseCategory />
          </div>
          <div className="add-buttons">
            <button className="save-button" type="submit">Save</button>
            <button 
              className="cancel-button" 
              onClick={e => {
                e.preventDefault()
                this.props.closeAddLocation()
              }}
            >Cancel
            </button>
          </div>  
        </form>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  categories: state.manageItemReducer.categories
})

export default connect(mapStateToProps, { saveLocation, closeAddLocation, openChooseCategory })(AddLocations)