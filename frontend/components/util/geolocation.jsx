export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation not supported by browser!"));
            return;
        } 

        navigator.geolocation.getCurrentPosition(pos => {
            resolve({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            
            err => {
                reject(err);
            },
            
            { enableHighAccuracy: true, timeout: 5500, maximumAge: 0 }
        )
    });
};