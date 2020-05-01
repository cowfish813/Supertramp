import { RECEIVE_LOCATION, RESET_LOCATION } from '../actions/map_action';

const LocationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LOCATION:
            return Object.assign({}, action.geoLocation);
        case RESET_LOCATION:
            return {}
        default:
            return state;
    }
};

export default LocationReducer;