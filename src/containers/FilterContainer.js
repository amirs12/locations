import React, { Component } from 'react';
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../Actions/Actions.js'

//import './FilterContainer.css';

class FilterContainer extends Component {
  render() {
    return (
      <div className="filter-container">
        <span>Filter: </span>
        <FilterLink filter={VisibilityFilters.FILTER_BY_CATEGORY}>
          By Category
        </FilterLink>
        <FilterLink filter={VisibilityFilters.FILTER_ALL}>
          All
        </FilterLink>
      </div>
    );
  }  
}

export default FilterContainer