import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, openfilterBox } from '../../../../../../Actions/Actions.js'

import './CategoryLink.css';

class CategoryLink extends Component {
  render() {
    const { filter, visibilityFilterState } = this.props
    const active = visibilityFilterState  === 'FILTER_BY_CATEGORY'

    return (
      <div className="category-link">
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
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  visibilityFilterState: state.visibilityFilterReducer.visibilityFilterState
})

export default connect(mapStateToProps, { setVisibilityFilter, openfilterBox })(CategoryLink)