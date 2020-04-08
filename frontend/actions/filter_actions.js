import { fetchListings } from './listing_actions/listing_actions';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = data => ({
    type: UPDATE_FILTER,
    data
})

export const updateFilter = data => (dispatch, getState) => {
    dispatch(changeFilter(data));
    return fetchListings(getState().ui.filters)(dispatch)
}