import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPageItem } from '../../Actions/Actions'

import './Footer.css';

class Footer extends Component {
  render() {
    const { page, selectedPage } = this.props

    return (
      <nav className="footer">
        <Link to="/locations/" className="footer-link">
          <div onClick={() => this.props.selectPageItem(page)}
           style={{color: selectedPage === 'locations' ? 'cyan' : 'white'}}>
            <i className="fas fa-map-marker-alt"></i>
            <div className="footer-locations">Locations</div>
          </div>  
        </Link>
        <Link to="/categories/" className="footer-link">
          <div onClick={() => this.props.selectPageItem(page)}
           style={{color: selectedPage === 'categories' ? 'cyan' : 'white'}}>
            <i className="fas fa-folder-open"></i>
            <div className="footer-categories">Categories</div>
          </div>  
        </Link>
      </nav>
    );
  }  
}

const mapStateToProps = state => ({
  selectedPage: state.visibilityFilterReducer.selectedPage
})

export default connect(mapStateToProps, { selectPageItem })(Footer)