import React, {useState, useEffect} from 'react';
import {closeModal} from '../../actions/modal_actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import BookingUpdateForm from '../bookings/booking_update_form_container';
import { useSelector, useDispatch } from 'react-redux';
import { removeErrors, receiveErrors } from '../../actions/session_actions'

function Modal() {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.ui.modal);
    const errors = useSelector(state => state.errors.session);

    const handleCloseModal = () => { dispatch(closeModal()) };

    useEffect(() => {
        console.log(errors)
        debugger
        if (errors.length >= 1) {
            const content = document.getElementById('error-content');
            content.classList.add("animate");
            // setTimeout(() => { 
                //multiple set timeouts hurt program. what's another way to restart countdown?
            //     content.classList.remove("animate")
            //     dispatch(removeErrors())
            // }, 3500);
        }
    }, [errors])


    if (!modal) return null

    let component
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
            fxn={modal.fxn}
            />
            break;
        default:
            return null
    };

    return (
        <div className="modal-background" onClick={ handleCloseModal }>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component } 
            </div>
            {errors.length > 0 ? (
                <div id="error-parent">
                    <div id="error-content" className="feedback-indicator animate">
                        {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                        ))}
                    </div>
                </div>
            ) : <></>}
        </div>
    );
}

export default Modal;