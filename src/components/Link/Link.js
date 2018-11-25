import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Link.css';

class Link extends Component {
  render() {
    const { active, children, onClick } = this.props

    return (
      <div className="link">
        <button
          onClick={onClick}
          disabled={active}
          style={{
              marginLeft: '4px',
          }}
        >
          {children}
        </button>
      </div>
    )
  }  
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link