import { combineReducers } from 'redux' //how will i know if i import something has curlies?
import usersReducer from './users_reducer'
import listingsReducer from './listing_reducers/listings_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer

})

export default entitiesReducer