import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, closefilterBox } from '../../../../../../Actions/Actions.js'

import './FilterAllLink.css'

class FilterAllLink extends Component {
  render() {
    const { filterState, filter } = this.props
    const active = filterState  === 'FILTER_ALL'

    return (
      <div className="filter-all-link">
        <div
          className="by-all" 
          onClick={() => {
            this.props.setVisibilityFilter(filter)
            this.props.closefilterBox()
          }}
          disabled={active}
          style={{
            borderBottomColor: active ? 'cyan' : 'white',
            color: active ? 'cyan' : 'white'
          }}
          >All
        </div>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  filterState: state.visibilityFilterReducer.filterState
})

export default connect(mapStateToProps, { setVisibilityFilter, closefilterBox })(FilterAllLink)