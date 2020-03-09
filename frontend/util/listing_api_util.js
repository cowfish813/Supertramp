//index/ all
export const fetchListings = (listings) => (

    $.ajax({
        url: '/api/listings',
        listings
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
// export const createListing = (listForm) => (
//     $.ajax({
//         url: `api/listings/`,
//         method: 'POST',
//         data: listForm,
//         contentType: false,
//         processData: false
//     })
// ) wat is content type and process data here???

export const updateListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'PATCH',
        data: {listingId}
    })
)

export const createReview = review => (
    $.ajax({
        url: 'api/reviews',
        method: 'POST',
        data: { review }
    })
)