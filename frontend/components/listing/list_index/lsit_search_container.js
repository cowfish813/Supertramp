import { connect } from 'react-redux';
import { updateFilter, removeFilter, removeAllFilters } from '../../../actions/filter_actions';
import { resetLocation } from '../../../actions/map_action';
import ListSearch from './list_search';

const mstp = (state) => ({
    listings: Object.values(state.entities.listings),
    location: state.ui.location,
    filters: state.ui.filter
});
 
const mdtp = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    removeFilter: (filter) => dispatch(removeFilter(filter)),
    removeAllFilters: () => dispatch(removeAllFilters()),
    resetLocation: () => dispatch(resetLocation())
});

export default connect(mstp, mdtp)(ListSearch);