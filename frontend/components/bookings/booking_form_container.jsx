import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions/modal_actions';
import { createBooking } from '../../actions/booking_actions/booking_action';

const mstp = (state, ownProps) => {
  
    return ({
      currentUser: state.entities.users[state.session.currentUser],
      currentUserID: state.session.id
    });
}

const mdtp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    createBooking: booking => dispatch(createBooking(booking))
});

export default connect(mstp, mdtp)(BookingForm)