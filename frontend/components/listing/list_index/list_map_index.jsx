import React from 'react';
import MarkerManager from '../../../util/map_marker';
import { withRouter } from 'react-router-dom';
import ReactDOMServer from "react-dom";
// import { useState } from 'react';

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
        this.mapOptions = {
            center: {
                lat: this.state.lat,
                lng: this.state.lng
            },
            zoom: 13,
            mapTypeId: "terrain",
        };
    //this.map = undefined D:

        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
    };


    componentWillReceiveProps(nextProps) {
        if (nextProps.mapLocation.lat !== this.props.mapLocation.lat || nextProps.mapLocation.lng !== this.props.mapLocation.lng ) {
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
                this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
                this.registerListeners();
                this.MarkerManager.updateMarkers(this.props.listings);
            });
        }
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

// const ListMapIndex =(props) => {
//     const [state, setState] = useState(() => {
//         if (props.mapLocation.state) {
//             return {
//                 lat: props.mapLocation.state.lat,
//                 lng: props.mapLocation.state.lng,
//             };
//         } else {
//             return props.mapLocation;
//         }
//     });
//     const mapOptions = useRef({
//         center: {
//             lat: state.lat,
//             lng: state.lng
//         },
//         zoom: 13,
//         mapTypeId: "terrain",
//     });
//     const mapNode = useRef(null);
//     const map = useRef(null);
//     const MarkerManager = useRef(null);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//         mapOptions.current = {
//             center: {
//                 lat: state.lat,
//                 lng: state.lng
//             },
//             zoom: 13,
//             mapTypeId: "terrain",
//         };
//         map.current = new google.maps.Map(mapNode.current, mapOptions.current);
//         MarkerManager.current = new MarkerManager(map.current, handleMarkerClick);
//         registerListeners();
//         MarkerManager.current.updateMarkers(props.listings);
//     }, []);

//     useEffect(() => {
//         if (props.mapLocation.lat !== state.lat || props.mapLocation.lng !== state.lng) {
//             setState({
//                 lat: props.mapLocation.lat,
//                 lng: props.mapLocation.lng,
//             });
//         }
//     }, [props.mapLocation]);

//     useEffect(() => {
//         if (props.listings !== MarkerManager.current.props.listings) {
//             MarkerManager.current.updateMarkers(props.listings);
//         }
//     }, [props.listings]);

//     const registerListeners = () => {
//         google.maps.event.addListener(map.current, 'idle', () => {
//             const { north, south, east, west } = map.current.getBounds().toJSON();
//             const bounds = {
//                 northEast: { lat: north, lng: east },
//                 southWest: { lat: south, lng: west }
//             };
//             props.updateFilter(bounds);
//         });
//     };

//     const handleMarkerClick = (listing) => {
//         props.history.push(`/listings/${listing.id}`);
//     };

//     return (
//         <div
//             className="mapIndex"
//             id="mapNode"
//             ref={mapNode}
//         />
//     );
// }

export default withRouter(ListMapIndex);