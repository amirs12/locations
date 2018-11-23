import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <Link to="/locations/" className="link">Locations</Link>
        <Link to="/categories/" className="link">Categories</Link>
      </nav>
    );
  }  
}

export default Footer