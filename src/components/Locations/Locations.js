import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Location from '../Location/Location.js'
import AddLocations from './components/AddLocations/AddLocations.js'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SortContainer from '../../containers/SortContainer'
import FilterContainer from '../../containers/FilterContainer'

import './Locations.css';

class Locations extends Component {
  render() {
    const { locations, addLocationOpen } = this.props
    let addLocationBox
    if (addLocationOpen) {
      addLocationBox = <AddLocations />
    }

    return (
      <div>
        <Header page="locations"/>
        <article className="locations-box">
          <SortContainer />
          <FilterContainer />
          <div>
            {addLocationBox}
            <div>
              {locations.map(location =>
                <Location
                  key={location.id} locations={locations} 
                  {...location}
                />
              )}
            </div>
          </div>
        </article>
        <Footer page="locations"/>
      </div>
    );
  }
}

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  addLocationOpen: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  addLocationOpen: state.addItemReducer.addLocationOpen
})

export default connect(mapStateToProps)(Locations)