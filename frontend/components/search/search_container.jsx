import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router-dom';
import { receiveLocation } from '../../actions/map_action';

const mDTP = dispatch => ({
    receiveLocation: (location) => dispatch(receiveLocation(location))
});

export default withRouter(connect(null, mDTP)(Search));