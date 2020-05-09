import listIndex from './list_index';
import { connect } from 'react-redux';
import { fetchListings } from '../../../actions/listing_actions/listing_actions'
// import { updateFilter } from '../../../actions/filter_actions';


const mSTP = (state, ownProps) => ({
    // listingss: Object.values(state.entities.listings),
});

const mDTP = dispatch => ({
    // updateFilter: (bounds) => dispatch(updateFilter(bounds))
    // fetchListingss: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(listIndex);