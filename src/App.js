import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './components/Header/Header'
import LocationsList from './containers/LocationsList.js'
import CategoriesList from './containers/CategoriesList.js'
import Footer from './components/Footer/Footer'
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom'

import './App.css';

const Index = () => (
  <div className="home">
    <Header />
    <h1 className="home-header">MyLocations App</h1>
    <i class="fas fa-map-marker-alt home-icon"></i>
    <Footer />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Route exact path="/" component={Index} />
          <Route path="/locations/" component={LocationsList} />
          <Route path="/categories/" component={CategoriesList} />

        </div>
      </Router>
    )
  }
}

export default connect()(App)