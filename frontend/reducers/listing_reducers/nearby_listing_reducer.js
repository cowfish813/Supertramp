import { RECEIVE_NEARBY_LISTINGS } from "../../actions/listing_actions/listing_actions";

const nearbyListingsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_NEARBY_LISTINGS:
            return Object.assign({}, state, action.listings);
        default:
            return state;
    }
}

export default nearbyListingsReducer;