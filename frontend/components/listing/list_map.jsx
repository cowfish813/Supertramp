import React from 'react'
import { withRouter } from 'react-router-dom'
import MarkerManager from '../../util/map_marker'

class ListMap extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0); //scrolls to top
        const mapOptions = {
            // center: { lat: 37.7758, lng: -122.435 }, 
          center: { 
              lat: this.props.list.lat, 
              lng: this.props.list.lng 
            },
          zoom: 13,
          mapTypeId: "terrain", //sets map to terrain type
        };
        
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // let center = {
        //     lat: this.props.list.lat,
        //     lng: this.props.list.lng,
        // };

        // const circle = new google.maps.Circle({
        //     strokeColor: '51D9AC',
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#71DBB4",
        //     fillOpacity: 0.35,
        //     map: this.map,
        //     center: center,
        //     radius: 1800
        // })
    }
    

    render () {
        return <div className="map" ref={(map) => (this.mapNode = map)}></div>;
    }
}

export default withRouter(ListMap)