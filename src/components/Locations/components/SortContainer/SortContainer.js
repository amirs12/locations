import React, { Component } from 'react';
import FilterLink from '../../../../containers/FilterLink'
import { SortFilters } from '../../../../Actions/Actions.js'

import './SortContainer.css';

class SortContainer extends Component {
  render() {
    return (
      <div className="sort-container">
        <span className="sort-title">Sort: </span>
        <div className="sort-links">
          <FilterLink filter={SortFilters.SHOW_BY_CATEGORY}>
              By Category
          </FilterLink> 
          <FilterLink filter={SortFilters.SHOW_BY_ABC}>
              Alphabetical
          </FilterLink>
        </div>
      </div>  
    );
  }  
}

export default SortContainer