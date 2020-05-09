import * as ApiUtil from '../../util/listing_api_util';

export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const DESTROY_REVIEW = 'DESTROY_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});
const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

const removeListing = () => ({
    type: REMOVE_LISTING
});

const receiveReview = (review, user) => ({
    type: RECEIVE_REVIEW,
    review,
    user
});

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

const deleteReview = (review) => ({
    type: DESTROY_REVIEW,
    reviewId: review.id
});

export const fetchListings = () => dispatch => {
    return ApiUtil.fetchListings()
    .then( (listings) => dispatch(receiveListings(listings)))
}
export const fetchListing = (listingId) => dispatch => {
    return ApiUtil.fetchListing(listingId)
    .then( (listing) => dispatch(receiveListing(listing)))
}

export const createListing = listing => dispatch =>  {
    return ApiUtil.createListing(listing)
    .then( (listing) => dispatch(receiveListing(listing)))
}
export const updateListing = listing => dispatch => {
    return ApiUtil.updateListing(listing)
    .then( (listing) => dispatch(receiveListing(listing)))
}

export const deleteListing = listingId => dispatch => {
    return ApiUtil.deleteListing(listingId)
        .then(() => dispatch(removeListing(listingId)))
}

export const createReview = (review) => dispatch => {
    return ApiUtil.createReview(review)
        .then((review) => dispatch(receiveReview(review))),
        err => dispatch(receiveReviewErrors(err.responseJSON))
};

export const updateReview = (review) => dispatch => {
    return ApiUtil.updateReview(review)
        .then((review) => dispatch(receiveReview(review))),
        err => dispatch((err.responseJSON))
};

export const removeReview = (id) => dispatch => {
    return ApiUtil.deleteReview(id)
        .then((review) => dispatch(deleteReview(review)))
};

export const fetchReviews = () => dispatch => {
    return ApiUtil.fetchReviews()
        .then((reviews) => dispatch(receiveReviews(reviews)))
};
