import { connect } from 'react-redux';
import { login, clearErrors, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import {fetchBooking, deleteBooking, fetchBookings} from '../../actions/booking_actions/booking_action';

const mSTP = (state, ownProps) => {
    // debugger;
    // let bookings = [];

    // if (state.entities) {
    //     bookings = Object.values(state.entites.bookings);
    // }

    return ({
        // errors: state.errors.session,
        user: state.entities.users[ownProps.match.params.userId],
        // bookings
        bookings: state.entities.bookings

    });
}

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user)),
    // fetchBooking: (userId) => dispatch(fetchBooking(userId)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mdtp)(UserShow);