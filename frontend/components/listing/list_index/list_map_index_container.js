import {connect } from 'react-redux';
import { receiveLocation } from '../../../actions/map_action';
import { withRouter } from 'react-router-dom';
import listMap from './list_map_index';

const mdtp = dispatch => ({
    receiveLocation: (location) => dispatch(receiveLocation(location))
});

export default withRouter(connect(null, mdtp)(listMap));