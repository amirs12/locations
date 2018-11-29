import React, { Component } from 'react';
import { connect } from 'react-redux'
import SortCategory from './components/SortCategory/SortCategory.js'
import SortAlpha from './components/SortAlpha/SortAlpha.js'
import { SortFilters } from '../../../../Actions/Actions.js'

import './SortContainer.css';

class SortContainer extends Component {
  render() {
    return (
      <div className="sort-container">
        <span className="sort-title">Sort: </span>
        <div className="sort-links">
          <SortCategory filter={SortFilters.SHOW_BY_CATEGORY}>
              By Category
          </SortCategory> 
          <SortAlpha filter={SortFilters.SHOW_BY_ABC}>
              Alphabetical
          </SortAlpha>
        </div>
      </div>  
    );
  }  
}

const mapStateToProps = state => ({
  filterCategoryOpen: state.visibilityFilterReducer.filterCategoryOpen
})

export default connect(mapStateToProps)(SortContainer)