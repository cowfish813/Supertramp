//index/ all
export const fetchListings = () => (
    $.ajax({
        url: '/api/listings',
        // error: (err) => console.log(err) //hmm...
    })
)

export const fetchListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`
    })
)

export const deleteListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'DELETE'
    })
)

export const createListing = (listing) => (
    $.ajax({
        url: `api/listings/`,
        method: 'POST',
        data: {listing}
    })
)

export const updateListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'PATCH',
        data: {listingId}
    })
)