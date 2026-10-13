import React from 'react';
import MarkerManager from '../../../util/map_marker';
import { withRouter } from 'react-router-dom';

class ListMapIndex extends React.Component {
    constructor(props) {
        super(props)

        if (props.mapLocation.state) {
            this.state = {
                lat: props.mapLocation.state.lat,
                lng: props.mapLocation.state.lng,
            };    
        } else {
            this.state = props.mapLocation;
        };

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.mapOptions = {
            center: {
                lat: this.state.lat,
                lng: this.state.lng
            },
            zoom: 13,
            mapTypeId: "terrain",
        };

        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
    };

    
    componentDidUpdate(prevProps) {
        const prev = prevProps.mapLocation?.state || prevProps.mapLocation;
        const next = this.props.mapLocation?.state || this.props.mapLocation;

        if (prev.lat !== next.lat || prev.lng !== next.lng) {
            this.map.setCenter({lat: next.lat, lng: next.lng});
            this.MarkerManager.updateMarkers(this.props.listings);
        } else if (prevProps.listings !== this.props.listings) {
            this.MarkerManager.updateMarkers(this.props.listings);
        }
    }

    registerListeners() {
        google.maps.event.clearListeners(this.map, 'idle');
        google.maps.event.addListener(this.map, 'idle', () => {
            const {north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter(bounds);
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
}

export default withRouter(ListMapIndex);