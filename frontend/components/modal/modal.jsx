import React from 'react'
import {closeModal} from '../../actions/modal_actions/modal_actions'
import {connect} from 'react-redux'
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'
import BookingUpdateForm from '../bookings/booking_update_form_container'

function Modal({ errors, modal, closeModal }) {
    if (!modal) return null

    let errorModal = <div></div>
    if (errors.length > 0) {
        errorModal = (<div className="feedback-indicator">
            {errors.map((error, i) => {
                return  <li key={i}>{error}</li>
            })}
        </div>)
    }

    let component
    // debugger
    switch (modal.modal) { 
        case 'Login':
            component = <LoginFormContainer />
            break;
        case 'Signup':
            component = <SignupFormContainer />
            break;
        case 'Booking':
            component = <BookingUpdateForm  
            booking={modal.data}
            // listId={this.props.booking.listing_id}
            />

            break;
        default:
            return null
    };
    //currently passing in a string that opens up forms
    //find a way to pass in listing ID
    //



    return (
        <div>
            <div className="modal-background" onClick={ closeModal }>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    { component } 
                </div>
                <div >
                { errorModal }
                </div>
            </div>
        </div>
    );
}




const mSTP = state => ({
    modal: state.ui.modal,
    errors: state.errors.session
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),

})

export default connect(mSTP, mDTP)(Modal)