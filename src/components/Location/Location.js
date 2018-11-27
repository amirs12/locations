import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LocationDetails from './components/LocationDetails/LocationDetails.js'
import LocationEdit from './components/LocationEdit/LocationEdit.js'
import { selectLocationItem } from '../../Actions/LocationActions.js'

import './Location.css';

class Location extends Component {
  render() {
    const { locations, text, id } = this.props
    let detailsBox,
        editBox
    let location = locations[id]

    if (location.deleted === true) {
      return <div></div>
    } else {
/*      detailsBox = locations.filter(location =>
        (location.id === id)
      )*/
      if (location.viewMode === true) {
        detailsBox = <LocationDetails location={location} id={id}/>
      }
      if (location.editMode === true) {
        editBox = <LocationEdit id={id}/>
      }
    }

    return (
      <div className="location-item" 
           onClick={() => this.props.selectLocationItem(id)}
           style={{color: locations[id].selected ? 'cyan' : 'white'}}
           >
        <div className="location-name">{text}</div>
        <div>{detailsBox}</div>
        <div>{editBox}</div>    
      </div>
    )
  }  
}

Location.propTypes = {
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  addLocationOpen: state.manageItemReducer.addLocationOpen,
})

export default connect(mapStateToProps, { selectLocationItem })(Location)