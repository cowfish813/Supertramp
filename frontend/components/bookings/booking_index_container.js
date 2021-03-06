import { connect } from 'react-redux';
import BookingIndex from './booking_index'
import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchBookings } from '../../actions/booking_actions/booking_action';
import { fetchListings } from '../../actions/listing_actions/listing_actions';
import { openModal } from '../../actions/modal_actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        bookings: Object.values(state.entities.bookings)
    }
};

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    fetchListings: (id) => dispatch(fetchListings(id)),
    openModal: (modal, data, fxn) => dispatch(openModal(modal, data, fxn)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mdtp)(BookingIndex);