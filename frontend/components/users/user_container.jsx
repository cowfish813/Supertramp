import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchBookings } from '../../actions/booking_actions/booking_action';

const mSTP = (state, ownProps) => {
    let bookings = [];
    if (state.entities) {
        bookings = Object.values(state.entities.bookings);
    }
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        bookings
    });
};

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user)),
    // fetchBooking: (userId) => dispatch(fetchBooking(userId)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mdtp)(UserShow);