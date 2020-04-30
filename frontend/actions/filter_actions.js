import { fetchListings } from './listing_actions/listing_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const REMOVE_ALL_FILTERS = 'REMOVE_ALL_FILTERS';

export const changeFilter = data => ({
    type: UPDATE_FILTER,
    data
});

export const removeFilter = filter => ({
    type: REMOVE_FILTER,
    filter
});

export const removeAllFilters = () => ({
    type: REMOVE_ALL_FILTERS
});

export const updateFilter = data => (dispatch, getState) => {
    dispatch(changeFilter(data));
    return fetchListings(getState().ui.filters)(dispatch)
};

export const removeOneFilter = filter => (dispatch, getState) => {
    dispatch(removeFilter(filter));
    return fetchListings(getState().ui.filters)(dispatch);
};

export const removeFilters = () => (dispatch, getState) => {
    dispatch(removeAllFilters());
    return fetchListings(getState().ui.filters)(dispatch);
};