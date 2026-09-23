import React from 'react';
import SearchBar from '../search/search_container';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Nearby from './nearby';
import SafetyPartners from './safety_partners';

const AREAS = [
    { scope: "Yosemite", title: "Near Yosemite", coords: { lat: 37.7456, lng: -119.5936 }},
    { scope: "SF", title: "Near San Francisco", coords: { lat: 37.7749, lng: -122.4194 }},
    { scope: "NY",  title: "Near New York", coords: { lat: 40.7128, lng: -74.0060 }},
    { scope: "Seattle",  title: "Near Seattle", coords: { lat: 47.6062, lng: -122.3321 }},
    { scope: "Austin",  title: "Near Austin", coords: { lat: 30.2672, lng: -97.7431 }}
    //add filters in the
];
class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.handleTile3 = this.handleTile3.bind(this);
        this.handleTile2 = this.handleTile2.bind(this);
        this.handleTile1 = this.handleTile1.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchRandomListings(9);
    }

    handleInput() {
        this.props.history.push({
            pathname: `/search/37.74557009999999,-119.5936038`,
            state: { 
                lat: 37.8032783,
                lng: -119.5393594
            }
        }); 
    }

    handleTile3(e) {
        //desert
        e.preventDefault();
        this.props.history.push({
            pathname: `/search/29.283921,41.657576`,
            state: { 
                lat: 29.283921,
                lng: 41.657576
            }
        });       
    }

    handleTile2(e) {     
        //japan
        e.preventDefault();
        this.props.history.push({
            pathname: `/search/34.910977,137.250385`,
            state: { 
                lat: 34.910977,
                lng: 137.250385
            }
        });       
    }
    
    handleTile1(e) {
        //yosemite
        e.preventDefault();
        this.props.history.push({
            pathname: `/search/37.74557009999999,-119.5936038`,
            state: { 
                lat: 37.8032783,
                lng: -119.5393594
            }
        });       
    }

    render() {
        return (
            <div className="superHomePage">

                <div className="home">
                    <div className="homeCol">
                        <div className="homeTitle">
                            <h1>
                                Find yourself outside.
                            </h1>
                        </div>
                        <div className="homeDesc">
                            <h2>
                                Book unique camping experiences on many
                                campsites, cabins, parks, and road sides!
                            </h2>
                        </div>
                    </div>
                </div>

                < SearchBar />

                <div className="containerBanner">
                    <img src="/banner.webp" alt="bannerbar"
                    className="bannerImg"
                    id="bannerImg"
                    />
                    <div className="banner_message">
                        <div >
                            <span className="banner_font">Explore Dozens of Locations!</span>
                        </div>
                        <span className="banner_sub_message">Run a search or scroll down below and start exploring!</span>
                        <div className="intro_button_container">
                            <button onClick={this.handleInput} className="intro_button">I'm feeling Lucky!</button>
                        </div>
                    </div>                  
                </div>

                <div className="tiles-container">
                    <h1 className="title-listing">Check Out These Areas!</h1>
                    <div className="tiles-tile margin-left-7-9-15pc">
                        <img onClick={this.handleTile1} className="poppingRectangle" src="/camel.webp" alt="camel"/>
                        <img onClick={this.handleTile2} className="poppingRectangle" src="/cy19txhitis6xwltkdhu.webp" alt="family camp"/>
                        <img onClick={this.handleTile3} className="poppingRectangle" src="/hamwjtqwsdqffioglcvq.webp" alt="cabin"/>
                    </div>
                </div>


                {/* nearby user or not rendered if rejected */}
                <Nearby/>

                {AREAS.map((area) => (
                    <Nearby key={area.scope} {...area} />
                ))}

                {/* shuffled favorites */}
                <div className="vague-locations-container">
                    <h1 className="title-listing margin-left-7-9-15pc">A few of our favorites, shuffled</h1>
                    <div className="flex flex-row vague-tile-list margin-left-7-9-15pc">
                        {Object.values(this.props.randomListings || {}).map(listing => (
                            <Link key={listing.id} to={`/listings/${listing.id}`}>
                                <img
                                    className="vague-picture"
                                    src={listing.photoUrls?.[0]}
                                    alt={listing.name}
                                />
                                <div className='text-descriptor'>${listing.price} for {listing.minimum_nights} {listing.minimum_nights > 1 ? "nights" : "night"}</div>
                            </Link>
                        ))}
                    </div>
                </div>
                <SafetyPartners/>                
            </div>
        )
    }
};

export default withRouter(Homepage);