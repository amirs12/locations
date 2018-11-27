import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveEditLocation, closeEditLocation, openChooseCategory } from '../../../../Actions/LocationActions.js'
import ChooseCategory from '../../../../common/ChooseCategory/ChooseCategory.js'

import './LocationEdit.css';

class LocationEdit extends Component {
  componentWillMount() {
    this.props.openChooseCategory()
  }

  render() {
    const { categories, id } = this.props
    let inputName,
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
            )
            if (!inputName.value.trim() || 
                !inputAddress.value.trim() ||
                !inputCoordinates.value.trim() ||
                chosenCategories.length < 0) {
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
                this.props.closeEditLocation(id)
              }}
            >
              Cancel
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

export default connect(mapStateToProps, { saveEditLocation, openChooseCategory, closeEditLocation })(LocationEdit)