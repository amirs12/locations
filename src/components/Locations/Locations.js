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
    const { locations, addLocationOpen, visibilityFilterState, categoryTofilter } = this.props
    let addLocationBox
 
    if (addLocationOpen) {
      addLocationBox = <AddLocations />
    }

    let visibleLocaiotns
    if (visibilityFilterState === "FILTER_BY_CATEGORY") {
      visibleLocaiotns = 
        locations.filter(location =>
          (location.chosenCategories.indexOf(categoryTofilter) > -1)
        ).map(location =>
          <Location
            key={location.id} locations={locations} 
            {...location}
          />
        )
    } else {
      visibleLocaiotns = locations.map(location =>
        <Location
          key={location.id} locations={locations} 
          {...location}
        />
      )
    }

    return (
      <div>
        <Header page="locations"/>
        <article className="locations-box">
          <SortContainer />
          <FilterContainer />
          <div>
            {addLocationBox}
          </div>
          <div>
            {visibleLocaiotns}
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
  addLocationOpen: state.categoryItemReducer.addLocationOpen,
  visibilityFilterState: state.visibilityFilterReducer.visibilityFilterState,
  categoryTofilter: state.categoryItemReducer.categoryTofilter
})

export default connect(mapStateToProps)(Locations)