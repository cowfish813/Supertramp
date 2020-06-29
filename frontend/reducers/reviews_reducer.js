import { RECEIVE_REVIEWS, RECEIVE_REVIEW, DESTROY_REVIEW } from '../actions/listing_actions/listing_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        case DESTROY_REVIEW:
            delete newState[action.review.id]
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;
