import * as ApiUtil from '../../util/listing_api_util'


export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const REMOVE_LISTING = 'REMOVE_LISTING'


const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
})
const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
})

const removeListing = () => ({
    type: REMOVE_LISTING
})


export const fetchListings = () => dispatch => {
    return ApiUtil.fetchListings()
    .then( (listings) => dispatch(receiveListings(listings)))
}
export const fetchListing = (listingId) => dispatch => {
    return ApiUtil.fetchListing(listingId)
    .then( (listings) => dispatch(receiveListing(listings)))
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

