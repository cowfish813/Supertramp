import React from 'react';
import SearchBar from '../search/search_container';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.handleTile3 = this.handleTile3.bind(this);
        this.handleTile2 = this.handleTile2.bind(this);
        this.handleTile1 = this.handleTile1.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchListings();
    }

    handleInput() {
        window.scrollTo({
            left: 0, 
            top: 1450, 
            behavior: 'smooth'
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
                                Book unique camping experiences on
                                <strong> Hella </strong>
                                campsites, cabins, parks, and road sides!
                            </h2>
                        </div>
                    </div>
                </div>
                    < SearchBar />

                <div className="containerBanner">
                    <img src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_auto/campground-photos/gyqfoddi8knyfberfznf.jpg" alt="bannerbar"
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

                <div className="tilesContainer">
                    <h1 className="title_listing">Check Out These Areas!</h1>
                    <div className="tiles_tile">
                        <img onClick={this.handleTile1} className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1513711999/campground-photos/jxhpqyakfthq93t8on4x/mudita-camel-s-yurt-camels-and-a-yurt-animal-camel.jpg" alt=""/>
                        <img onClick={this.handleTile2} className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                        <img onClick={this.handleTile3} className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1572899400/campground-photos/hamwjtqwsdqffioglcvq/tiny-house-in-happy-valley-tiny-house-glamping-mountains.jpg" alt=""/>
                    </div>
                </div>
                
                <div className="vagueLocationsContainer">
                    <h1 className="title_listing">Our top listings</h1>
                    <div className="vague_tile_list">
                        <Link to="/listings/174"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg" alt=""/> </Link>
                        <Link to="/listings/175"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg" alt=""/> </Link>
                        <Link to="/listings/176"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg" alt=""/> </Link>
                    </div>

                    <div className="vague_tile_list">

                        <Link to="/listings/177"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg" alt=""/> </Link>
                        <Link to="/listings/204"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg" alt=""/> </Link>
                        <Link to="/listings/203"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg" alt=""/> </Link>
                    </div>
                </div>

                <div className=""> 
                    <h3 className="sp_header">Safety Partners</h3>
                    <div className='flex'>
                        <div className='margin-right-15 sp_div green_background flex flex-col'>
                            <img className='sp_img' src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_auto/internal/recreate_responsibly_text.png"></img>
                            <a href='https://www.recreateresponsibly.org/' className='flex align_center learn_more'>Learn More</a>
                        </div>

                        <div className='margin-right-15 sp_div green_background flex flex-col'>
                            <img className='sp_img' src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_auto/internal/leave_no_trace_text.png"></img>
                            <a href="https://lnt.org/why/7-principles/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                        <div className='margin-right-15 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <img className='pow' src="https://raw.githubusercontent.com/cowfish813/Supertramp/splash/app/assets/images/protect-our-winters-vector-logo-cropped.svg"></img>
                                <h1 className="sp_header">Protect Our Winters</h1>
                                <p className='flex flex-wrap sp_text'>We help passionate outdoor people protect the places and experiences they love from climate change.</p>
                            </div>
                            <a href="https://protectourwinters.org/about-pow/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(Homepage);