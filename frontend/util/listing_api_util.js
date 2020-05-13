export const fetchListings = (data) => (

    $.ajax({
        url: '/api/listings',
        data
    })
);

export const fetchListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`
    })
);

export const deleteListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'DELETE'
    })
);

// export const createListing = (listing) => (
//     $.ajax({
//         url: `api/listings/`,
//         method: 'POST',
//         data: {listing}
//     })
// )

export const createListing = (listForm) => (
    $.ajax({
        url: `api/listings/`,
        method: 'POST',
        data: listForm,
        contentType: false,
        processData: false
    })
);

export const updateListing = (listingId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'PATCH',
        data: {listingId}
    })
);

export const createReview = review => (
    $.ajax({
        url: 'api/reviews',
        method: 'POST',
        data: { review }
    })
);

export const updateReview = review => (
    $.ajax({
        url: `api/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
);

export const deleteReview = reviewId => (
    $.ajax({
        url: `api/reviews/${reviewId}`,
        method: 'DELETE'
    })
);

export const fetchReviews = () => (
    $.ajax({
        url: `api/reviews`
    })
);