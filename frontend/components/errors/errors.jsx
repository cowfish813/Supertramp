import React from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'


class Errors extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
            <div className="feedback-indicator"> 
                {this.props.errors.map(error => {
                return <li>{error}</li>
                })}
            </div>
    }
}




const mSTP = state => ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    formType: 'Errors'
})

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),

})

export default connect(mSTP, mDTP)(Errors)