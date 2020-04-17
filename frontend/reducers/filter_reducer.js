import {UPDATE_FILTER  } from '../actions/filter_actions';

const defaultFilter = {
    bounds: {}
};

const FilterReducer = (state = defaultFilter, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, {bounds: action.value});
        default:
            return state;
    }
};

export default FilterReducer;