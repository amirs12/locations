import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LocationDetails from './components/LocationDetails/LocationDetails'
import LocationEdit from './components/LocationEdit/LocationEdit'
import { selectLocationItem } from '../../Actions/LocationActions'

import './Location.css';

class Location extends Component {
  render() {
    const { locations, selected, text, id } = this.props
    let detailsBox,
        editBox
    
    if (locations[id].deleted === true) {
      return <div></div>
    } else {
      if (locations[id].viewMode === true) {
        detailsBox = <LocationDetails locations={locations} id={id}/>
      }
      if (locations[id].editMode === true) {
        editBox = <LocationEdit text={text} id={id}/>
      }
    }

    return (
      <div className="location-item" 
           onClick={() => this.props.selectLocationItem(id)}
           style={{color: selected ? 'red' : 'black'}}
           >
        <div>{text}</div>
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
  addLocationOpen: state.addItemReducer.addLocationOpen,
})

export default connect(mapStateToProps, { selectLocationItem })(Location)