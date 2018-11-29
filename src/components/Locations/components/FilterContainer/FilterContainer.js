import React, { Component } from 'react';
import { connect } from 'react-redux'
import FilterAllLink from './components/FilterAllLink/FilterAllLink.js'
import CategoryLink from './components/CategoryLink/CategoryLink.js'
import ChooseFilterCategory from './components/ChooseFilterCategory/ChooseFilterCategory.js'

import './FilterContainer.css';

class FilterContainer extends Component {
  render() {
    const { filterCategoryOpen } = this.props
    let filterCategoryBox
    if (filterCategoryOpen === true) {
      filterCategoryBox = <ChooseFilterCategory />
    }

    return (
      <div className="filter-container">
        <div className="filter-options">
          <span className="filter-title">Filter: </span>
          <CategoryLink filter={"FILTER_BY_CATEGORY"}/>
          <FilterAllLink filter={"FILTER_ALL"}/>
        </div>  
        <div>{filterCategoryBox}</div>
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  filterCategoryOpen: state.visibilityFilterReducer.filterCategoryOpen
})

export default connect(mapStateToProps)(FilterContainer)