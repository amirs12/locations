import { connect } from 'react-redux'
import Categories from '../components/Categories/Categories.js'

const mapStateToProps = state => ({
  categories: state.manageItemReducer.categories
})

export default connect(mapStateToProps)(Categories)