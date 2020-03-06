import React from 'react'
import { connect } from 'react-redux'
import { closeModal, openModal } from '../../actions/modal_actions/modal_actions'
import NavBar from './navbar'

const mSTP = state => ({
    formType: 'login',
    currentUser: state.entities.user
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal)=> dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(NavBar)
// should probably consider throwing null state...