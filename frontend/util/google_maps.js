let loaded;

export const loadGoogleMaps = () => {
    if (!loaded) {
        loaded = window.mapsReady.then(() =>
            Promise.all(
                ['core', 'maps', 'marker', 'places'].map(lib => google.maps.importLibrary(lib))
            )
        );
    }
    return loaded;
};