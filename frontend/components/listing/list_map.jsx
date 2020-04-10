import React from 'react'
import { withRouter } from 'react-router-dom'

class ListMap extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchListing()

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        
        
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        
        const circle = new google.maps.Circle({
            strokeColor: '51D9AC',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#71DBB4",
            fillOpacity: 0.35,
            map: this.map,
            center: center,
            radius: 1800
        })
    }
    

    render () {
        return <div className="map" ref={(map) => (this.mapNode = map)}></div>;
    }
}

export default withRouter(ListMap)