import React from 'react';
import MarkerManager from '../../../util/map_marker'
import { withRouter } from 'react-router-dom';

const mapOptions = {
    center: {
        lat: 40.494087,
        lng: 29.211901
    },
    zoom: 13,
    mapTypeId: "terrain",
};

class ListMapIndex extends React.Component {
    constructor(props) {
        super(props)

    };


    componentDidMount() {
        window.scrollTo(0, 0);
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
    };

    componentDidUpdate() {
        
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const {north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });

    }

    handleMarkerClick(listing) {
        this.props.history.push(`/listings/${listing.id}`);
    }

    render() {
        return (
            <div
                className="mapIndex"
                id="mapNode"
                ref={(map) => (this.mapNode = map)}
            />
        )
    };
};

export default ListMapIndex;