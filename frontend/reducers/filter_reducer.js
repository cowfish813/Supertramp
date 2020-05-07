import {UPDATE_FILTER, REMOVE_ALL_FILTERS, REMOVE_FILTER } from '../actions/filter_actions';

const defaultFilter = {
    bounds: {}
};

const FilterReducer = (state = defaultFilter, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            //[aciton.filter] instead of bounds?
            return Object.assign({}, state, {bounds: action.data});
        case REMOVE_FILTER:
            const newState = Object.assign({}, state)
            delete newState[action.filter]
            return newState
        case REMOVE_ALL_FILTERS:
            return Object.assign({}, {bounds: state.bounds})
        default:
            return state;
    }
};

export default FilterReducer;