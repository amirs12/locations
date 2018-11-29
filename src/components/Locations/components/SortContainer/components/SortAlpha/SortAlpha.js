import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilitySort } from '../../../../../../Actions/Actions.js'

import './SortAlpha.css'

class SortAlpha extends Component {
  render() {
    const { filter, sortState } = this.props
    const active = sortState  === 'SHOW_BY_ABC'

    return (
      <div
        className="sort-alpha"
        onClick={() => this.props.setVisibilitySort(filter)}
        style={{
          borderBottomColor: active ? 'cyan' : 'white',
          color: active ? 'cyan' : 'white'
        }}
        >Alphabetical
      </div>
    )
  } 
}

const mapStateToProps = state => ({
    sortState: state.visibilityFilterReducer.sortState
})

export default connect(mapStateToProps, { setVisibilitySort })(SortAlpha)