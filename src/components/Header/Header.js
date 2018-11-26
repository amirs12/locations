import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewItem, editItem, addItem, deleteItem } from '../../Actions/Actions.js'

import './Header.css';

class Header extends Component {
  render() {
    const { page, name } = this.props
    return (
      <div className="header">
        <span className="">{name}</span>
        <div className="manage-button" onClick={() => this.props.addItem(page)}>
          <i className="fas fa-plus-square"></i>
          <div className="manage-button-title">Add</div>
        </div>
        <div className="manage-button" onClick={() => this.props.viewItem(page)}>
          <i className="fas fa-eye"></i>
          <div className="manage-button-title">View</div>
        </div>
        <div className="manage-button" onClick={() => this.props.editItem(page)}>
          <i className="fas fa-pencil-alt"></i>
          <div className="manage-button-title">Edit</div>
        </div>
        <div className="manage-button" onClick={() => this.props.deleteItem(page)}>
          <i className="fas fa-trash-alt"></i>
          <div className="manage-button-title">Delete</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
//  selectedPage: state.selectPageReducer.selectedPage
})

export default connect(mapStateToProps, { viewItem, editItem, addItem, deleteItem })(Header)