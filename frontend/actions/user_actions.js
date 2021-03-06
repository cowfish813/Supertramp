import { fetchUser, fetchUsers, updateUser } from '../util/user_util'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const changeUser = (user) => ({
    type: UPDATE_USER,
    data: { user }
})

export const requestUsers = () => dispatch => {
    return fetchUsers().then( (users) => dispatch(receiveUsers(users)))
}

export const requestUser = userId => dispatch => {
    return fetchUser(userId).then( (user) => dispatch(receiveUser(user)))
}

export const patchUser = userId => dispatch => {
    return updateUser(userId).then((user))
        .then((user) => dispatch(requestUser(user)))
}