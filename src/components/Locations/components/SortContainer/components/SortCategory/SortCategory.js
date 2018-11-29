import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilitySort } from '../../../../../../Actions/Actions.js'

import './SortCategory.css';

class SortCategory extends Component {
  render() {
    const { filter, sortState } = this.props
    const active = sortState  === 'SHOW_BY_CATEGORY'

    return (
      <div
        className="sort-category"
        onClick={() => this.props.setVisibilitySort(filter)}
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

export default connect(mapStateToProps, { setVisibilitySort })(SortCategory)