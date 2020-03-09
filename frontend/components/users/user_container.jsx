import React from 'react'
import { connect } from 'react-redux'
import { login, clearErrors, receiveErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'
import User from './user'

const mstp = (state, ownProps) => ({
    errors: state.errors.session,
    user: state.entities.user,
})

const mdtp = dispatch => ({

})

export default connect(mstp, mdtp)(User)