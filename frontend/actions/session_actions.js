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
}) //takes array



export const signup = user => dispatch => {
  return ApiUtil.signup(user)
  .then(user => dispatch(receiveUser(user)))
}

export const login = user => dispatch => {
  return ApiUtil.login(user)
  .then(user => dispatch(receiveUser(user)))
}

export const logout = (userId) => dispatch => {
  return ApiUtil.logout(userId)
  .then( () => dispatch(logoutUser(userId)))
}
