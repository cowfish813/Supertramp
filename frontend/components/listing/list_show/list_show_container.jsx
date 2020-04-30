import { connect } from 'react-redux';
import { fetchListing } from '../../../actions/listing_actions/listing_actions';
import ListShow from './list_show';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        list: state.entities.listings[ownProps.match.params.listingsId],
        // listings: state.entities.listings
    });
};

const mDTP = dispatch => ({
    fetchListing: (listing) => dispatch(fetchListing(listing)),

});

export default withRouter(connect(mSTP, mDTP)(ListShow));