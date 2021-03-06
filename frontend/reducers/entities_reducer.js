import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listing_reducers/listings_reducer';
import bookingsReducer from './bookings/bookings_reducer';
import reviewsReducer from './reviews_reducer';



const entitiesReducer = combineReducers({
    bookings: bookingsReducer,
    users: usersReducer,
    listings: listingsReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;
