import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setVisibilityFilter, closefilterBox } from '../../../../../../Actions/Actions.js'

import './SortAlpha.css'

class SortAlpha extends Component {
  render() {
    const { visibilityFilterState, filter } = this.props
    const active = visibilityFilterState  === 'FILTER_ALL'

    return (
      <div className="sort-alpha">
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

SortAlpha.propTypes = {
  active: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  visibilityFilterState: state.visibilityFilterReducer.visibilityFilterState
})

export default connect(mapStateToProps, { setVisibilityFilter, closefilterBox })(SortAlpha)