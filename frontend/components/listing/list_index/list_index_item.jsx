import React from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';


class IndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        // const listId = this.props.listing.id
        this.props.history.push(`/listings/${listingId}`);
    }

    render() {
        return (
            <div className="index_container">
                <div className="index_photo">
                    <Link to={`/listings/${this.props.listing.id}`}>
                        <img src={this.props.listing.photoUrls} alt=""/>
                    </Link>
                </div>
                <div className="listing_index_desc">
                    <h1>{this.props.listing.name}</h1>
                    <div className="listing_index_price">{this.props.listing.price}/day</div>
                </div>
            </div>
        )
    };
};

export default IndexItem;