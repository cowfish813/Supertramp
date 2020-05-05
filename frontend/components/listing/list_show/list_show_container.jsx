import { connect } from 'react-redux';
import { fetchListing } from '../../../actions/listing_actions/listing_actions';
import ListShow from './list_show';
import { withRouter } from 'react-router-dom';
import {requestUser} from '../../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        list: state.entities.listings[ownProps.match.params.listingsId],
        hostUser: state.entities.users[ownProps.match.params.usersId]
        // listings: state.entities.listings
    });
};

const mDTP = dispatch => ({
    fetchListing: (listing) => dispatch(fetchListing(listing)),
    fetchHost: (booking_hostId) => dispatch(requestUser(booking_hostId))

});

export default withRouter(connect(mSTP, mDTP)(ListShow));