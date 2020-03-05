import React from 'react'


class ListMap extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // const mapOptions = {
        //     center: { lat: 37.7758, lng: -122.435 }, // this is SF
        //     zoom: 13
        // };

        // // wrap this.mapNode in a Google Map
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render () {
        return (
            <div id='map-container' ref ='map'>
                

            </div>
        )
    }
}

export default ListMap