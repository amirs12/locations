import React, { Component } from 'react';
import { connect } from 'react-redux'
import FilterAllLink from '../../../FilterAllLink/FilterAllLink.js'
import CategoryLink from '../../../CategoryLink/CategoryLink.js'
import ChooseFilterCategory from '../../../ChooseFilterCategory/ChooseFilterCategory.js'

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
        <span className="filter-title">Filter: </span>
        <FilterAllLink filter={"FILTER_ALL"}/>
        <CategoryLink filter={"FILTER_BY_CATEGORY"}/>
        <div>{filterCategoryBox}</div>
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  filterCategoryOpen: state.visibilityFilterReducer.filterCategoryOpen
})

export default connect(mapStateToProps)(FilterContainer)