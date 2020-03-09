import * as ApiUtil from '../../util/listing_api_util'

export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export const changeSearch = (search, value) => ({
    type: UPDATE_SEARCH,
    search,
    value
})

// export const updateSearch = (search, value) => (dispatch, getState) => {
//     dispatch(changeSearch(search, value));
//     return ApiUtil.fetchListings(getState().ui.)(dispatch)
// }