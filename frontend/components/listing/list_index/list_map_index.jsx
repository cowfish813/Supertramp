import React from 'react';
import MarkerManager from '../../../util/map_marker'
import { withRouter } from 'react-router-dom';
import ReactDOMServer from "react-dom";

// const mapOptions = {
//     center: {
//         lat: 40.494087,
//         lng: 29.211901
//     },
//     zoom: 13,
//     mapTypeId: "terrain",
// };

class ListMapIndex extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
          lat: this.props.location.state.lat,
          lng: this.props.location.state.lng,
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
        // let lat = this.props.location.state.lat;
        // let lng = this.props.location.state.lng;
        // if (!(this.props.location.state.lat) || !(this.props.location.state.lng)) {
        //     lat = 40.494087;
        //     lng = 29.211901;
        // }

        //   let mapOptions = {
        //     center: {
        //       lat: this.state.lat,
        //       lng: this.state.lng
        //     },
        //     zoom: 13,
        //     mapTypeId: "terrain",
        //   };

        window.scrollTo(0, 0);
        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
    };


    getLocation() {
        // const geoCode = new google.maps.Geocoder();
        // geoCode.geocode({ address: this.props.location }), (res, status) => {
        //     if (status === 'OK') {
        //         this.map.setCenter(res[0].geometry.location)
        //     }
        // };
    }

    componentWillReceiveProps(nextProps) {
        debugger
        this.setState({
          lat: nextProps.location.state.lat,
          lng: nextProps.location.state.lng,
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
        }
        
        // if (this.props.location) {
        //     this.getLocation();
        //     // this.props.resetLocation();
        // }
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
};

export default withRouter(ListMapIndex);