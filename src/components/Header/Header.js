import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewItem, editItem, addItem, deleteItem } from '../../Actions/Actions.js'

import './Header.css';

class Header extends Component {
  render() {
    const { page, name, selectedAction } = this.props

    return (
      <div className="header">
        <div>{name}</div>
        <div className="header-buttons">
          <div className="manage-button" onClick={() => this.props.addItem(page)}
              style={{color: selectedAction === 'Add' ? 'cyan' : 'white'}}
              >
            <i className="fas fa-plus-square"></i>
            <div className="manage-button-title">Add</div>
          </div>
          <div className="manage-button" 
              onClick={() => {this.props.viewItem(page)}}
              style={{color: selectedAction === 'View' ? 'cyan' : 'white'}}        
              >
            <i className="fas fa-eye"></i>
            <div className="manage-button-title">View</div>
          </div>
          <div className="manage-button" onClick={() => this.props.editItem(page)}
              style={{color: selectedAction === 'Edit' ? 'cyan' : 'white'}}
              >
            <i className="fas fa-pencil-alt"></i>
            <div className="manage-button-title">Edit</div>
          </div>
          <div className="manage-button" onClick={() => this.props.deleteItem(page)}
              style={{color: selectedAction === 'Delete' ? 'cyan' : 'white'}}
              >
            <i className="fas fa-trash-alt"></i>
            <div className="manage-button-title">Delete</div>
          </div>
        </div>  
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedAction: state.manageItemReducer.selectedAction,
  locations: state.manageItemReducer.locations
})

export default connect(mapStateToProps, { viewItem, editItem, addItem, deleteItem,  })(Header)