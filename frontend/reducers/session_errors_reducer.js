import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/session_actions'

//should state be []?
const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    const defaultErrors = [];

    switch (action.type) {
        case RECEIVE_USER:
            return defaultErrors;
        case RECEIVE_ERRORS:
            return action.errors;
            
        default:
            return state;
    }
}

export default sessionErrorsReducer;