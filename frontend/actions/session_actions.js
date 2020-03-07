import * as ApiUtil from '../util/session_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_USER = "LOGOUT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const logoutUser = () => ({
  type: LOGOUT_USER
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
}) 



export const signup = user => dispatch => (
  ApiUtil.signup(user)
  .then(user => dispatch(receiveUser(user)),
  err => (dispatch(receiveErrors(err.responseJSON))))
)


export const login = user => dispatch => (
   ApiUtil.login(user)
  .then(user => dispatch(receiveUser(user)), 
  err=>(dispatch(receiveErrors(err.responseJSON))))
  // .fail(errors => dispatch(receiveErrors(errors)))
)

export const logout = (userId) => dispatch => (
  ApiUtil.logout(userId)
  .then( () => dispatch(logoutUser(userId)),
  err => (dispatch(receiveErrors(err.responseJSON))))
)

