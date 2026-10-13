import React from 'react'
import ReactDOMServer from "react-dom/server";

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
                <div className="">
                    <img className="infoPic" src={listing.photoUrls}></img>
                </div>
                <div className="infoDetails">
                    <div className="infoDetailName">{listing.name}</div>
                    <div className="infoDetailPrice">${listing.price}/day</div>
                </div>
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
            icon: {
                url: './mapmarker.png',
                scaledSize: new google.maps.Size(40, 40)
            }
        });

        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;

        marker.addListener('mouseover', () => {
            const info = ReactDOMServer.renderToString(infoBoxDetail)
            infoBox.setContent(info)
            infoBox.open(this.map, marker)
        })

        marker.addListener('mouseout', () => {
            infoBox.close();
        })
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
}

export default MarkerManager;