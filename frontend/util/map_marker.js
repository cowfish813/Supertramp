class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(listings) {
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);

        listings
            .filter(listing => listingsObj[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick));

        Object.keys(this.markers)
            .filter(listingId => !listingsObj[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromListing(listing) {
        const marker = new google.maps.Marker({
            position: { lat: listing.lat, lng: listing.lng },
            map: this.map,
            listingId: listing.id
        });
        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
}

export default MarkerManager