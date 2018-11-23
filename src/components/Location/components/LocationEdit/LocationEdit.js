import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveEditLocation } from '../../../../Actions/LocationActions.js'

import './LocationEdit.css';

class LocationEdit extends Component {
    render() {
        let input
        const { text, id } = this.props
      return (
        <div className="location-edit">
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            this.props.saveEditLocation(input.value, id)
            input.value = ''
            }}>
            <input ref={node => input = node} name="edit-lct" id="edit-lct" placeholder={text} autoFocus/>
            <button type="submit">Save</button>
          </form>
        </div>
      )
    }  
  }
  
  const mapStateToProps = state => ({
  //  addBoxOpen: state.addItemReducer.addBoxOpen
  })
  
  export default connect(mapStateToProps, { saveEditLocation })(LocationEdit)