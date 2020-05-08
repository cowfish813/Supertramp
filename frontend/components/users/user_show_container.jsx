import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchBookings, fetchBooking } from '../../actions/booking_actions/booking_action';
import { fetchListings } from '../../actions/listing_actions/listing_actions';
import { openModal } from '../../actions/modal_actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
      user: state.entities.users[ownProps.match.params.userId],
      listings: Object.values(state.entities.listings),
      bookings: Object.values(state.entities.bookings)
    };
};

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    fetchListings: () => dispatch(fetchListings()),
    openModal: () => dispatch(openModal()),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mdtp)(UserShow);