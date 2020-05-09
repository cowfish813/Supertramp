import { connect } from "react-redux";
import UserUpdate from './user_update'
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
  }
};

const mDTP = (dispatch) => {

}

export default withRouter(connect(mSTP, mDTP)(UserUpdate))