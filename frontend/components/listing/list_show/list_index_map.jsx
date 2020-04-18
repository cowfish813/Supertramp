import queryString from 'querystring'
import React from 'react'
import mapMarker from '../../../util/map_marker'

class ListIndexMap extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {

    }

    render () {
        return (
          <div className="map" ref={(map) => (this.mapNode = map)} />
        );
    }
}