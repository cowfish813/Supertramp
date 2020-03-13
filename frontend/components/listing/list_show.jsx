import React from 'react';

class ListShow extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        // this.state = this.props.list
    }

    componentDidMount() {
          this.props.fetchListing(this.props.match.params.listingsId)
    // set the map to show SF
    const mapOptions = {
        // replace lat and lng with this.props stuff
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    handleListing () {
        this.props.fetchListing()
    }


    render () {
        // debugger
        return (
            <div>
                <div className="social_share_target">
                    <div className="carousel">
                        <div className="photo_square">
                            <div className="photo_title">
                            <h1>{this.props.name}</h1>
                                <img className="list-show-photo" src={this.props.list.photoUrls} alt=""/>
                            
                                {/* "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/17855640_10105438859618553_1862219686291433231_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=U1_h6a7o6CgAX-BtgmW&_nc_ht=scontent-sjc3-1.xx&oh=97b66ead3b62704bba16c55dec9a9f20&oe=5E91FBB6" */}
                            {/* img is placeholder */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget-container">
                    <div className="wrapper">
                        <div className="price-wrapper">
                            <div className="price">
                                    {this.props.list.price}
                            </div>
                        </div>
                    </div>
                    <div className="dates-and-guest-content">
                        <div className="col checkin">
                            <div className="label">
                                Check in
                                <input type="date" className="col_box" />
                            </div>
                        </div>
                        <div className="col checkout">
                            <div className="label">
                                Check out
                                <input type="date" name="" id="" className="col_box"/>
                            </div>
                        </div>
                        <div className="col capacity">
                            <div className="label">
                                Guests
                                <input type="number" name="" id="" className="col_box"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="show-liting">
                    <div className="section-overview">
                        
                    <div className="content-bottom">
                        <div className="details-container">
                            <h1>{this.props.name}</h1>
                        </div>
                    </div>

                        <div className="row">
                            <div className='listed-by'>
                                {/* pic profile */}
                            </div>
                            <div className="desc-wrapper">
                                <p>{this.props.description}</p>
                            </div>
                            <div className="info-cards-wrapper">
                                <div className="info-cards"></div>
                                <div className="info-cards"></div>
                                <div className="info-cards"></div>
                            </div>
                        </div>
                    </div> 

                    <div className="feature-container"></div>
                    <div className="map" ref={map => this.mapNode = map}> </div>
                </div>
            </div>
        ) 

    }
}

ListShow.defaultProps = {
    list: {photoUrls: "",
    price: ""
    }
}

export default ListShow