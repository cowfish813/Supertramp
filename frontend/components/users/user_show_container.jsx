import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchBookings, fetchBooking } from '../../actions/booking_actions/booking_action';
import { fetchListings } from '../../actions/listing_actions/listing_actions';

const mSTP = (state, ownProps) => {
    // let bookings = [];
    // if (state.entities) {
    //     bookings = Object.values(state.entities.bookings);
    // }
    // debugger
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
    fetchBooking: (userId) => dispatch(fetchBooking(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mdtp)(UserShow);