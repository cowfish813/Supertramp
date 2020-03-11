import { combineReducers } from 'redux' 
import usersReducer from './users_reducer'
import listingsReducer from './listing_reducers/listings_reducer'
import bookingsReducer from './bookings/booking_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer,
    bookings: bookingsReducer

})

export default entitiesReducer