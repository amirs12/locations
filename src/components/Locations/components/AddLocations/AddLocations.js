import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveLocation, closeAddLocation } from '../../../../Actions/LocationActions.js'

import './AddLocations.css';

class AddLocations extends Component {
  render() {
    let inputName,
        inputAddress,
        inputCoordinates,
        inputCategory

    return (
      <div>
        <form className="location-form" onSubmit={e => {
          e.preventDefault()
          if (!inputName.value.trim() || 
              !inputAddress.value.trim() ||
              !inputCoordinates.value.trim() ||
              !inputCategory.value.trim()) {
            return
          }
          this.props.saveLocation(
            inputName.value, 
            inputAddress.value, 
            inputCoordinates.value, 
            inputCategory
          )
          this.props.closeAddLocation()
          inputName.value = ''
          inputAddress.value = ''
          inputCoordinates.value = ''
          inputCategory.value = ''
        }}>
          <input ref={node => inputName = node} name="lct-name" id="lct-name" placeholder="Location Name" autoFocus/>
          <input ref={node => inputAddress = node} name="lct-adr" id="lct-adr" placeholder="Address"/>
          <input ref={node => inputCoordinates = node} name="lct-coo" id="lct-coo" placeholder="Coordinates"/>
          <input ref={node => inputCategory = node} name="lct-ctg" id="lct-ctg" placeholder="Category"/>
          <button className="save-button" type="submit">Save</button>
        </form>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
//  addBoxOpen: state.addItemReducer.addBoxOpen
})

export default connect(mapStateToProps, { saveLocation, closeAddLocation })(AddLocations)