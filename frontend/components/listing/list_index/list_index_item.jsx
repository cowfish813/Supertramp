import React from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
    };

    handleClick() {
        const listId = this.props.listing.id;
        this.props.history.push(`/listings/${listId}`);
    };

    render() {
        return ( 
            <div className="index_container">
                <div className="index_box">
                    <Link to={`/listings/${this.props.listing.id}`}>
                        <img className="indexPhotos" src={this.props.listing.photoUrls} alt=""/>
                    </Link>
                </div>
                <div>
                    <div className="listing_index_desc">
                        <div className="list_index_name">{this.props.listing.name}</div>
                        <div className="listing_index_price margin_left2">From 
                            <div className="bold">
                                ${this.props.listing.price}
                            </div>/day
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default withRouter(IndexItem);