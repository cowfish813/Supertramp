import React from 'react'
import ListIndex from './list_index_container'
import ListMapIndex from './list_map_index'
import SearchBar from '../../search/search_container'

class ListSearchResults extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.filters
    }



    render () {
        return (
            <div>
                <div className="">
                    < SearchBar />
                </div>
                <div className="search_results">
                    < ListIndex 
                        // listings={this.props.listings}
                    />
                    < ListMapIndex 
                    updateFilter={this.props.updateFilter}
                    listings={this.props.listings}
                    />

                </div>
            </div>
        )
    }
};

export default ListSearchResults