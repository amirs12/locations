import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Footer.css';

class Footer extends Component {
  render() {
    const { page } = this.props

    return (
      <nav className="footer">
        <Link to="/locations/" className="footer-link">
          <div className="footer-button-box" style={{color: page === 'locations' ? 'cyan' : 'white'}}>
            <i className="fas fa-map-marker-alt"></i>
            <div className="footer-locations">Locations</div>
          </div>  
        </Link>
        <Link to="/categories/" className="footer-link">
          <div className="footer-button-box" style={{color: page === 'categories' ? 'cyan' : 'white'}}>
            <i className="fas fa-folder-open"></i>
            <div className="footer-categories">Categories</div>
          </div>  
        </Link>
      </nav>
    );
  }  
}

export default Footer