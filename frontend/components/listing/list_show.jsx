import React from 'react';

class ListShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.listing
    }

    render () {

        return (
            <div>
                <div className="social_share_target">
                    <div className="carousel">
                        <div className="photo_square"></div>
                    </div>
                </div>

                <div className="widget-container">
                    <div className="wrapper">
                        <div className="price-wrapper">
                            <div className="price">
                                    {this.state.price}
                            </div>
                        </div>
                    </div>
                    <div className="dates-and-guest-content">
                        <div className="col checkin">
                            <div className="label">
                                Check in
                                <input type="date" value="Select Date" />
                            </div>
                        </div>
                        <div className="col checkout">
                            <div className="label">
                                Check out
                                <input type="date" name="" id=""/>
                            </div>
                        </div>
                        <div className="col capacity">
                            <div className="label">
                                Guests
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-bottom">
                    <div className="details-container">
                        <h1>{this.state.name}</h1>
                    </div>
                </div>

                <div className="show-liting">
                    <div className="row">
                        <div className='listed-by'>
                            {/* pic profile */}
                        </div>
                        <div className="desc-wrapper">
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) 

    }
}

export default ListShow