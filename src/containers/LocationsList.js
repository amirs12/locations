import { connect } from 'react-redux'
import Locations from '../components/Locations/Locations.js'

const mapStateToProps = state => ({
  locations: state.locationItemReducer.locations
})

export default connect(mapStateToProps)(Locations)