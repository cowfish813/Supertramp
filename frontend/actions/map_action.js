export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RESET_LOCATION = 'RESET_LOCATION';

export const receiveLocation = (geoLocation) => ({
    type: RECEIVE_LOCATION,
    geoLocation
});

export const resetLocation = () => ({
    type: RESET_LOCATION
})