import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewItem, editItem, addItem, deleteItem } from '../../Actions/Actions.js'

import './Header.css';

class Header extends Component {
  render() {
    const { page } = this.props
    return (
      <div className="header">
        <div className="manage-button" onClick={() => this.props.viewItem(page)}>View</div>
        <div className="manage-button" onClick={() => this.props.editItem(page)} >Edit</div>
        <div className="manage-button" onClick={() => this.props.addItem(page)}>Add</div>
        <div className="manage-button" onClick={() => this.props.deleteItem(page)}>Delete</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
//  selectedPage: state.selectPageReducer.selectedPage
})

export default connect(mapStateToProps, { viewItem, editItem, addItem, deleteItem })(Header)