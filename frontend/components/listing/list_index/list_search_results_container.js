import { connect } from 'react-redux';
import { updateFilter, removeFilter, removeAllFilters } from '../../../actions/filter_actions';
import { resetLocation, receiveLocation } from '../../../actions/map_action';
import ListSearch from './list_search_results';

const mstp = (state) => ({
    listings: Object.values(state.entities.listings),
    location: state.ui.location,
    filters: state.ui.filter
});
 
const mdtp = (dispatch) => ({
    updateFilter: (bounds) => dispatch(updateFilter(bounds)),
    removeFilter: (filter) => dispatch(removeFilter(filter)),
    removeAllFilters: () => dispatch(removeAllFilters()),
    resetLocation: () => dispatch(resetLocation()),
    receiveLocation: (location) => dispatch(receiveLocation(location))
});

export default connect(mstp, mdtp)(ListSearch);