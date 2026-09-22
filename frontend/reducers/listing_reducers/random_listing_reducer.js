import { RECEIVE_RANDOM_LISTINGS } from "../../actions/listing_actions/listing_actions";

const randomListingsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_RANDOM_LISTINGS:
            return Object.assign({}, state, action.listings);
        default:
            return state;
    }
}

export default randomListingsReducer;