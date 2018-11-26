import React, { Component } from 'react';
import FilterLink from '../../../../containers/FilterLink'
import { SortFilters } from '../../../../Actions/Actions.js'

import './SortContainer.css';

class SortContainer extends Component {
  render() {
    return (
      <div className="sort-container">
        <span className="sort-title">Show: </span>
        <FilterLink filter={SortFilters.SHOW_BY_ABC}>
            Alphabetical
        </FilterLink>
        <FilterLink filter={SortFilters.SHOW_BY_CATEGORY}>
            By Category
        </FilterLink> 
      </div>  
    );
  }  
}

export default SortContainer