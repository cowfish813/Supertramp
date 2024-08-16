import * as ApiUtil from '../util/session_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_USER = "LOGOUT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = 'REMOVE_EROORS'

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const logoutUser = () => ({
  type: LOGOUT_USER
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
}) 

export const removeErrors = () => ({
  type: REMOVE_ERRORS,

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

export const logout = () => dispatch => (
  ApiUtil.logout()
  .then( () => dispatch(logoutUser()),
  err => (dispatch(receiveErrors(err.responseJSON))))
)

export const clearErrors = () => dispatch(removeErrors())