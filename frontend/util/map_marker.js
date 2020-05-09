import React from 'react'
// import ReactDOMServer from "react-dom/server";

// const mapIcon = new google.maps.MarkerImage(
//   "https://supertramp-mast.s3-us-west-1.amazonaws.com/hipcamp%2Bgoogle%2Bmap%2Bmarker.png",
//   null /* size is determined at runtime */,
//   null /* origin is 0,0 */,
//   null /* anchor is bottom center of the scaled image */,
//   new google.maps.Size(50, 50)
// );

class MarkerManager  {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(listings) {
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);

        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick));

        Object.keys(this.markers)
            .filter(listingId => !listingsObj[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromListing(listing) {

        const infoBoxDetail = (
            <div id="infoBox">
                <img src={listing.photoUrls}></img>
                <div id="infoDetail">{listing.name}</div>
                <div id="infoDetail">{listing.price}</div>
            </div>
        )

        const infoBox = new window.google.maps.InfoWindow({
            content: ""
        })
        
        const position = new google.maps.LatLng( listing.lat, listing.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id,
            // icon: mapIcon
        });
        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;

        // marker.addListener('mouseover', () => {
        //     const info = ReactDomServer.renderToString(infoWindowContent)
        // })
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
}

export default MarkerManager;