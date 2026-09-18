import { 
    RECEIVE_LISTINGS, 
    RECEIVE_LISTING, 
    REMOVE_LISTING,
    RECEIVE_RANDOM_LISTINGS,
    RECEIVE_NEARBY_LISTINGS
} from '../../actions/listing_actions/listing_actions';


const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            newState[action.listing.id] = action.listing
            return newState;
        case REMOVE_LISTING: 
            delete newState[action.listing.id]
            return newState;
        case RECEIVE_RANDOM_LISTINGS:
            return Object.assign({}, state, action.listings);
        case RECEIVE_NEARBY_LISTINGS:
            return Object.assign({}, state, action.listings);
        default:
            return state;
    }
};

export default listingsReducer;