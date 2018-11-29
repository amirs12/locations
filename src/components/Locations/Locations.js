import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Location from '../Location/Location.js'
import AddLocations from './components/AddLocations/AddLocations.js'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SortContainer from './components/SortContainer/SortContainer.js'
import FilterContainer from './components/FilterContainer/FilterContainer.js'

import './Locations.css';

class Locations extends Component {
  render() {
    const { 
      locations, 
      categories, 
      addLocationOpen, 
      sortState, 
      filterState, 
      categoryTofilter 
    } = this.props
    let addLocationBox
 
    if (addLocationOpen) {
      addLocationBox = <AddLocations />
    }

    let sortedLocations = locations.sort(
      (a, b) => a.text.localeCompare(b.text, 'en', {'sensitivity': 'base'}))
    let visibleLocaiotns = sortedLocations.map(location =>
        <Location
          key={location.id} locations={locations} 
          {...location}
        />
    )  

    if (sortState === "SHOW_BY_CATEGORY") {
      let sortedCategories = categories.sort(
        (a, b) => a.text.localeCompare(b.text, 'en', {'sensitivity': 'base'})
      )
      
      let locationsByCategory = []
      let byCategoryBuilder = sortedCategories.map(category => {
        let currentGroup = sortedLocations.filter(location => 
          (location.chosenCategories.indexOf(category.text) > -1 
          && locationsByCategory.indexOf(location) < 0
          )
        )
        locationsByCategory = [...locationsByCategory, ...currentGroup]
        return ''
      })
      console.log(locationsByCategory)
      visibleLocaiotns = locationsByCategory.map(location =>
        <Location
          key={location.id} locations={locations} 
          {...location}
        />
      )  
    }

    if (filterState === "FILTER_BY_CATEGORY") {
      visibleLocaiotns = sortedLocations.filter(location =>
        (location.chosenCategories.indexOf(categoryTofilter) > -1)
      ).map(location =>
        <Location
          key={location.id} locations={locations} 
          {...location}
        />
      )
    }

    return (
      <div className="locations">
        <Header page="locations" name="My Locations"/>
        <article className="locations-box">
          <SortContainer />
          <FilterContainer />
          <div className="add-location-box">
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
  addLocationOpen: state.manageItemReducer.addLocationOpen,
  sortState: state.visibilityFilterReducer.sortState,
  filterState: state.visibilityFilterReducer.filterState,
  categoryTofilter: state.manageItemReducer.categoryTofilter,
  categories: state.manageItemReducer.categories
})

export default connect(mapStateToProps)(Locations)