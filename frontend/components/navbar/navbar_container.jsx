import React from 'react'
import { connect } from 'react-redux'
import { closeModal, openModal } from '../../actions/modal_actions/modal_actions'
import NavBar from './navbar'
import {logout} from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'

const mSTP = state => {
    return({  
        formType: 'login',
        currentUser: state.entities.users[state.session.currentUser],
        ID: state.session.currentUser
        })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal)=> dispatch(openModal(modal)),
    logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP, mDTP)(NavBar))
