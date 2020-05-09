import { RECEIVE_USER } from '../actions/session_actions';
import { UPDATE_USER } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USER:
            newState = Object.assign({}, state, { [action.user.id]: action.user })
            return newState;
        // case UPDATE_USER:

        default:
            return state;
    }
};

export default usersReducer;