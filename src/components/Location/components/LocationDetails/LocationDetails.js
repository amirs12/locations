import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeViewLocation } from '../../../../Actions/LocationActions.js'

import './LocationDetails.css';

class LocationDetails extends Component {
    render() {
      const { location, id } = this.props
      let connectdCategories = location.chosenCategories.map(category => category.text)

      return (
        <div className="location-details">
          <div className="location-details-row">
            <div className="details-property">
              <div className="details-title">Location Name</div>
              <div className="details-text">{location.text}</div>
            </div>
            <div className="details-property">
              <div className="details-title">Location Address</div>
              <div className="details-text">{location.address}</div>
            </div>
          </div>
          <div className="location-details-row">
            <div className="details-property">
              <div className="details-title">Location Coordinates</div>
              <div className="details-text">{location.coordinates}</div>
            </div>
            <div className="details-property">
              <div className="details-title">Assigned Categories</div>
              <div className="connectd-categories">{connectdCategories}</div>
            </div>
          </div>
          <button className="close-button" onClick={() => this.props.closeViewLocation(id)}>
            Close
          </button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.categoryItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { closeViewLocation })(LocationDetails)