import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import Greeting from './greeting'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
}) //finds by session token

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Greeting)