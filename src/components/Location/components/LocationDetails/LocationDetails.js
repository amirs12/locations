import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeViewLocation } from '../../../../Actions/LocationActions.js'

import './LocationDetails.css';

class LocationDetails extends Component {
    render() {
      const { location, id } = this.props
      let connectdCategories = location.chosenCategories.map(category => category)

      return (
        <div className="location-details">
          <div className="details-property">
            <div className="details-title">Location Name</div>
            <div className="details-text">{location.text}</div>
          </div>
          <div className="details-property">
            <div className="details-title">Location Address</div>
            <div className="details-text">{location.address}</div>
          </div>
          <div className="details-property">
            <div className="details-title">Location Coordinates</div>
            <div className="details-text">{location.coordinates}</div>
          </div>
          <div className="details-property">
            <div className="details-title">Location Categories</div>
            <div className="connectd-categories">{connectdCategories}</div>
          </div>  
          <button className="done-button" onClick={() => this.props.closeViewLocation(id)}>Done</button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.categoryItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { closeViewLocation })(LocationDetails)