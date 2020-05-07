import {connect } from 'react-redux';
import { receiveLocation } from '../../../actions/map_action';
import { withRouter } from 'react-router-dom';
import listMap from './list_map_index';
import { updateFilter } from '../../../actions/filter_actions'

// const mstp = (state) => ({
//     listings: Object.values(state.entities.listings)
// })

const mdtp = (dispatch) => ({
    receiveLocation: (location) => dispatch(receiveLocation(location)),
    // updateFilter: (bounds) => dispatch(updateFilter(bounds))

});

export default withRouter(connect(null, mdtp)(listMap));