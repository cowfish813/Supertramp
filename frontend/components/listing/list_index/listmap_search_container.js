import {connect } from 'react-redux';
import { receiveLocation } from '../../../actions/map_action';
import listMapSearch from './listmap_search';
import { withRouter } from 'react-router-dom';

const mdtp = (dispatch) => ({
    receiveLocation: (location) => dispatch(receiveLocation(location)),
});

export default withRouter(connect(null, mdtp)(listMapSearch));