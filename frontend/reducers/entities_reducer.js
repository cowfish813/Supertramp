// import { combineReducers } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users_reducer';
import listingsReducer from './listing_reducers/listings_reducer';
import randomListingsReducer from './listing_reducers/random_listing_reducer';
import nearbyListingsReducer from './listing_reducers/nearby_listing_reducer';
import bookingsReducer from './bookings/bookings_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    bookings: bookingsReducer,
    users: usersReducer,
    listings: listingsReducer,
    reviews: reviewsReducer,
    nearbyListings: nearbyListingsReducer,
    randomListings: randomListingsReducer,
});

export default entitiesReducer;
