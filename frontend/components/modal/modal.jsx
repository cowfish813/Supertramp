import React from 'react'
import {closeModal} from '../../actions/modal_actions/modal_actions'
import {connect} from 'react-redux'
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'

function Modal({ errors, modal, closeModal}) {
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
    switch (modal) {
        case 'Login':
            component = <LoginFormContainer />
            break;
        case 'Signup':
            component = <SignupFormContainer />
            break;
        default:
            return null
    };



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