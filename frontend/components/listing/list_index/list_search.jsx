import React from 'react'
import listIndex from './list_index_container'
import listMapIndex from './list_map_index_container'

class ListSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.filters

    }

    


    render () {
        return (
            <div>
                < listIndex />

                <listMapIndex />
            </div>
        )
    }
};

export default ListSearch