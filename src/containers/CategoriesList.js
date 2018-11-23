import { connect } from 'react-redux'
import Categories from '../components/Categories/Categories.js'

const mapStateToProps = state => ({
  categories: state.categoryItemReducer.categories
})

export default connect(mapStateToProps)(Categories)