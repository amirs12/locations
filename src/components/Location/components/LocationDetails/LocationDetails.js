import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeViewLocation } from '../../../../Actions/LocationActions.js'

import './LocationDetails.css';

class LocationDetails extends Component {
    render() {
      const { locations, id } = this.props
      return (
        <div className="location-details">
          <div>{locations[id].text}</div>
          <div>{locations[id].address}</div>
          <div>{locations[id].coordinates}</div>
          <div>{locations[id].category}</div>
          <button className="done-button" onClick={() => this.props.closeViewLocation(id)}>Done</button>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.addItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { closeViewLocation })(LocationDetails)