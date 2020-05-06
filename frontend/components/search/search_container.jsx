import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router-dom';
import { receiveLocation } from '../../actions/map_action';

// const mSTP = (state, ownProps) => ({
//     listings: Object.values(state.entities.listings)
// })

const mDTP = dispatch => ({
    receiveLocation: (location) => dispatch(receiveLocation(location))
});

export default withRouter(connect(null, mDTP)(Search));