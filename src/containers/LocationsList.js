import { connect } from 'react-redux'
import Locations from '../components/Locations/Locations.js'

const mapStateToProps = state => ({
  locations: state.manageItemReducer.locations,
  categories: state.manageItemReducer.categories
})

export default connect(mapStateToProps)(Locations)