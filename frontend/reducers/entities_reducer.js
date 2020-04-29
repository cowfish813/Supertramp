import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listing_reducers/listings_reducer';
import bookingsReducer from './bookings/bookings_reducer';



// console.log("bookings reducer", bookingsReducer)
const entitiesReducer = combineReducers({
    bookings: bookingsReducer,
    users: usersReducer,
    listings: listingsReducer,

});

export default entitiesReducer;
