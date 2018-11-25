import { connect } from 'react-redux'
import Locations from '../components/Locations/Locations.js'

const mapStateToProps = state => ({
  locations: state.locationItemReducer.locations,
  categories: state.categoryItemReducer.categories
})

export default connect(mapStateToProps)(Locations)