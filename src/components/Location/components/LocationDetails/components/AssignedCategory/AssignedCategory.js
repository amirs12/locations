import React, { Component } from 'react'

class AssignedCategory extends Component {
  render() {
    const { text } = this.props

    return (
      <div>
        {text}
      </div>
    )
  }  
}      


export default AssignedCategory