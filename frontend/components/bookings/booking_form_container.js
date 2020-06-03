import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions/modal_actions';
import { createBooking } from '../../actions/booking_actions/booking_action';

const mstp = (state, ownProps) => {
    return ({
      currentUser: state.entities.users[state.session.currentUser],
      allBookings: state.entities.bookings //maybe?
    });
};

const mdtp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    createBooking: booking => dispatch(createBooking(booking))
});

export default connect(mstp, mdtp)(BookingForm);