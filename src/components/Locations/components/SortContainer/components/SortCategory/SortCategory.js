import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilitySort, openSortBox } from '../../../../../../Actions/Actions.js'

import './SortCategory.css';

class SortCategory extends Component {
  render() {
    const { filter, sortState } = this.props
    const active = sortState  === 'FILTER_BY_CATEGORY'

    return (
      <div
        className="sort-category"
        onClick={() => {
          this.props.setVisibilitySort(filter)
          this.props.openSortBox()
        }}
        style={{
          borderBottomColor: active ? 'cyan' : 'white',
          color: active ? 'cyan' : 'white'
        }}
        >By Category
      </div>
    )
  }  
}

const mapStateToProps = state => ({
    sortState: state.visibilityFilterReducer.sortState
})

export default connect(mapStateToProps, { setVisibilitySort, openSortBox })(SortCategory)