import React from 'react';
import { withRouter } from 'react-router-dom';

class ListMapIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleSubmit(e) {
        e.preventDefault();
    };

    componentDidUpdate() {
        window.scrollTo(0, 0);
        // // if (!this.props.list.lng) {
        // //     this.props.fetchListing(this.props.listId)
        // // }

        // const mapOptions = {
        //     center: {
        //         lat: this.props.list.lat,
        //         lng: this.props.list.lng
        //     },
        //     zoom: 13,
        //     mapTypeId: "terrain",
        // };

        // this.map = new google.maps.Map(this.mapNode, mapOptions);

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
        // });
    };


    render() {
        return (
            <div
                className="map"
                id="mapNodeIndex"
                ref={(map) => (this.mapNode = map)}
            />
        )
    };
};

export default ListMapIndex;