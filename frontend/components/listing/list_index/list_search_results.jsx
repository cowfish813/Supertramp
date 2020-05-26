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
        window.scrollTo(0, 0)
        this.props.updateFilter(e)
        window.location.reload(false); //maybe remove

    }


    render () {
        return (
          <div className="list_search_result">
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
                mapLocation={this.props.mapLocation}
                resetLocation={this.props.resetLocation}

              />
            </div>
          </div>
        )
    }
};

export default withRouter(ListSearchResults)