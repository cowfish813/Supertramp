import React from 'react';
import MarkerManager from '../../../util/map_marker';
import { withRouter } from 'react-router-dom';
import ReactDOMServer from "react-dom";


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
        

        this.mapOptions = {
        center: {
            lat: this.state.lat,
            lng: this.state.lng
        },
        zoom: 13,
        mapTypeId: "terrain",
        };

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
    };


    componentWillReceiveProps(nextProps) {
        
        this.setState({
          lat: nextProps.mapLocation.lat,
          lng: nextProps.mapLocation.lng,
        }, () => {
            this.mapOptions = {
                center: {
                    lat: this.state.lat,
                    lng: this.state.lng
                },
                zoom: 13,
                mapTypeId: "terrain",
            };
            this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        });



    }

    componentDidUpdate(prevProps) {
        if (prevProps.listings !== this.props.listings) {
            this.MarkerManager.updateMarkers(this.props.listings);
        };
    }

    registerListeners() {
        
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