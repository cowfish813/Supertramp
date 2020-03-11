export const fetchUsers = () => (
    $.ajax({
        url: '/api/users'
    })
)
export const fetchUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)