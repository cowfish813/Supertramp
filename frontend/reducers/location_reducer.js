import { RECEIVE_LOCATION } from '../actions/map_action';

const LocationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LOCATION:
            return Object.assign({}, action.geoLocation);
        default:
            return state;
    }
};

export default LocationReducer;