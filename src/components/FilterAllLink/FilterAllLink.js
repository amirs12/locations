import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setVisibilityFilter } from '../../Actions/Actions.js'

//import './FilterAllLink.css'

class FilterAllLink extends Component {
  render() {
    const { active, filter } = this.props

    return (
      <div className="filter-all-link">
        <button
          onClick={() => {
            this.props.setVisibilityFilter(filter)
          }}
          disabled={active}
          style={{
              marginLeft: '4px',
          }}
          >All
        </button>
      </div>
    )
  }  
}

FilterAllLink.propTypes = {
  active: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  active: state.visibilityFilterReducer.visibilityFilterState === 'FILTER_ALL'
})

export default connect(mapStateToProps, { setVisibilityFilter })(FilterAllLink)