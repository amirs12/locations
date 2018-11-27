import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Link.css';

class Link extends Component {
  render() {
    const { active, children, onClick } = this.props

    return (
      <div className="link"
        onClick={onClick}
        disabled={active}
        style={{
            marginRight: '16px',
            borderBottomColor: active ? 'cyan' : 'white',
            color: active ? 'cyan' : 'white'
        }}
      >
        {children}
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