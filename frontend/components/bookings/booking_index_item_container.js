import BookingIndexItem from './booking_index_item'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchBookings } from '../../actions/booking_actions/booking_action';


const mstp = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        booking: state.entities.bookings,
        listing: state.entities.listings
    });
};

const mdtp = (dispatch) => ({
    requestUser: (user) => dispatch(requestUser(user)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default withRouter(connect(mstp, mdtp)(BookingIndexItem));