import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, openfilterBox } from '../../../../../../Actions/Actions.js'

import './CategoryLink.css';

class CategoryLink extends Component {
  render() {
    const { filter, filterState } = this.props
    const active = filterState  === 'FILTER_BY_CATEGORY'

    return (
      <div
        className="by-category"
        onClick={() => {
          this.props.setVisibilityFilter(filter)
          this.props.openfilterBox()
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
  filterState: state.visibilityFilterReducer.filterState
})

export default connect(mapStateToProps, { setVisibilityFilter, openfilterBox })(CategoryLink)