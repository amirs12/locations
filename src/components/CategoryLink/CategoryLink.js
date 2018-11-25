import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, openfilterBox } from '../../Actions/Actions.js'

import './CategoryLink.css';

class CategoryLink extends Component {
  render() {
    const { filter } = this.props

    return (
      <div className="category-link">
        <button
          onClick={() => {
            this.props.setVisibilityFilter(filter)
            this.props.openfilterBox()
          }}
          style={{
              marginLeft: '4px',
          }}
          >By Category
        </button>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
//  active: state.visibilityFilterReducer.visibilityFilterState === 'FILTER_BY_CATEGORY'
})

export default connect(mapStateToProps, { setVisibilityFilter, openfilterBox })(CategoryLink)