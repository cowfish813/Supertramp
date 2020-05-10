import React from 'react'
// import ListIndex from './list_index_container'
import ListMapIndex from './list_map_index'
import SearchBar from '../../search/search_container'
import ListIndex from './list_index'
import { withRouter } from "react-router-dom";


class ListSearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.filters
    }

    componentDidMount(e) {
        this.props.updateFilter(e)
    }


    render () {
        return (
          <div>
            <div className="">
              <SearchBar />
            </div>
            <div className="search_results">
              <ListIndex
                updateFilter={this.props.updateFilter}
                listings={this.props.listings}
              />
              <ListMapIndex
                updateFilter={this.props.updateFilter}
                listings={this.props.listings}
                place={this.props.location}
                resetLocation={this.props.resetLocation}

              />
            </div>
          </div>
        );
    }
};

export default withRouter(ListSearchResults)