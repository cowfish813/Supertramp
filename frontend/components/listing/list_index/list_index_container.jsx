import listIndex from './list_index'
import { connect } from 'react-redux'
import { updateFilter } from '../../../actions/filter_actions'


const mSTP = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
    location: ownProps.locaiton
    
})

const mDTP = dispatch => ({
    updateFilter: (bounds) => dispatch(updateFilter(bounds))
})

export default connect(mSTP, mDTP)(listIndex)