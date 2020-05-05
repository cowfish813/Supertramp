import listIndex from './list_index';
import { connect } from 'react-redux';
import {} from '../../../actions/listing_actions/listing_actions'
// import { updateFilter } from '../../../actions/filter_actions';


const mSTP = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
});

const mDTP = dispatch => ({
    // updateFilter: (bounds) => dispatch(updateFilter(bounds))
    fetchListing: dispatch => dispatch((fetchListings()))
});

export default connect(mSTP, mDTP)(listIndex);