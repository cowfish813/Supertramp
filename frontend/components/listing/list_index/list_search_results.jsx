import React from 'react'
import ListIndex from './list_index_container'
import ListMapIndex from './list_map_index_container'
import SearchBar from '../../search/search_container'

class ListSearchResults extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.filters

    }

    componentDidMount() {
        // this.props.fetchListings()
    }


    render () {
        return (
            <div>
                <div className="">
                    < SearchBar />
                </div>
                <div className="search_results">
                    < ListIndex />
                    < ListMapIndex />

                </div>
            </div>
        )
    }
};

export default ListSearchResults