import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Actions/Actions.js'
import Link from '../components/Link/Link.js'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilterState
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)