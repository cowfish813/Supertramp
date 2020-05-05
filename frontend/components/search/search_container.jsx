import { receiveLocation } from '../../actions/map_action';
import { connect } from 'react-redux';
import Search from './search';


// const mSTP = (state, ownProps) => ({
//     listings: Object.values(state.entities.listings)
// })

const mDTP = dispatch => ({
    receiveLocation: (geoLocation) => dispatch(receiveLocation(geoLocation))
});

export default connect(null, mDTP)(Search);