import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions'

const _defaultSession = {
    currentUser: null
}

export default (state = _defaultSession, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USER:
            newState = {currentUser: action.user.id}
            return newState
        case LOGOUT_USER:
            return _defaultSession
        default:
            return state
    }
}