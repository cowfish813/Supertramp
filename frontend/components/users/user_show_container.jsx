import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchBookings } from '../../actions/booking_actions/booking_action';
import { fetchListings } from '../../actions/listing_actions/listing_actions';
import { openModal } from '../../actions/modal_actions/modal_actions';

const mSTP = (state, ownProps) => {
  // debugger
    return {
      user: state.entities.users[ownProps.match.params.userId],
      bookings: Object.values(state.entities.bookings)
    }
};

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    fetchListings: () => dispatch(fetchListings()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mdtp)(UserShow);