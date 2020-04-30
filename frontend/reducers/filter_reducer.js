import {UPDATE_FILTER, REMOVE_ALL_FILTERS, REMOVE_FILTER } from '../actions/filter_actions';

const defaultFilter = {
    bounds: {}
};

const FilterReducer = (state = defaultFilter, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, {bounds: action.value});
        case REMOVE_FILTER:
            
        case REMOVE_ALL_FILTERS:

        default:
            return state;
    }
};

export default FilterReducer;