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

                <div className="tilesContainer">
                    <h1 className="title_listing">Check Out These Areas!</h1>
                    <div className="tiles_tile">
                        <img onClick={this.handleTile1} className="poppingRectangle" src="/camel.webp" alt="camel"/>
                        <img onClick={this.handleTile2} className="poppingRectangle" src="/cy19txhitis6xwltkdhu.webp" alt="family camp"/>
                        <img onClick={this.handleTile3} className="poppingRectangle" src="/hamwjtqwsdqffioglcvq.webp" alt="cabin"/>
                    </div>
                </div>
                
                <div className="vagueLocationsContainer">
                    <h1 className="title_listing">Our top listings</h1>
                    <div className="vague_tile_list">
                        <Link to="/listings/174"><img className="vague_picture" src="/57056162_10107436356788213_4281326518522609664_o.jpg" alt="Cherry Blossoms"/> </Link>
                        <Link to="/listings/175"><img className="vague_picture" src="/17545579_10105436252223793_1168540811776764446_o.webp" alt="Yosemite Winter"/> </Link>
                        <Link to="/listings/176"><img className="vague_picture" src="/55937490_10107418126272313_2116183051628183552_n.jpg" alt="Japanese temple"/> </Link>
                    </div>

                    <div className="vague_tile_list">

                        <Link to="/listings/177"><img className="vague_picture" src="/17855640_10105438859618553_1862219686291433231_o.webp" alt="Half Dome"/> </Link>
                        <Link to="/listings/204"><img className="vague_picture" src="/28828057_10106502756296083_3917095514831156302_o.webp" alt="NZ"/> </Link>
                        <Link to="/listings/203"><img className="vague_picture" src="/56312133_10107420712439613_2489365651806748672_n.jpg" alt="Bamboo forest"/> </Link>
                    </div>
                </div>

                <div className=""> 
                    <h3 className="sp_header">Safety Partners</h3>
                    <div className='flex'>
                        
                        <div className='margin-right-15 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <div className='sp_img_wrapper'>
                                    <img className='' alt='Recreate Responsibly' src='/recreate-responsibly.png'></img>
                                </div>
                                <h1 className="sp_header no-wrap-ellipsis">Recreate Responsibly</h1>
                                <ol className='flex flex-col '>
                                    <li className='safety_bullets'>1. Know before you go</li>
                                    <li className='safety_bullets'>2. Practice physical distancing</li>
                                    <li className='safety_bullets'>3. Plan ahead</li>
                                    <li className='safety_bullets'>4. Play it safe</li>
                                    <li className='safety_bullets'>5. Explore locally</li>
                                    <li className='safety_bullets'>6. Leave no trace</li>
                                    <li className='safety_bullets'>7. Build an inclusive outdoors</li>
                                </ol>
                            </div>
                            <a href="https://lnt.org/why/7-principles/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                        <div className='margin-right-15 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <div className='sp_img_wrapper'>
                                    <img className='' alt='Leave No Trace' src='/leave-no-trace.png'></img>
                                </div>
                                <h1 className="sp_header flex">Leave No Trace</h1>
                                <ol className='flex flex-col'>
                                    <li className='safety_bullets'>1. Plan ahead and prepare</li>
                                    <li className='safety_bullets'>2. Travel and camp on durable surfaces</li>
                                    <li className='safety_bullets'>3. Dispose of waste properly</li>
                                    <li className='safety_bullets'>4. Leave what you find</li>
                                    <li className='safety_bullets'>5. Minimize campfire impact</li>
                                    <li className='safety_bullets'>6. Respect wildlife</li>
                                    <li className='safety_bullets'>7. Be considerate of others</li>
                                </ol>
                            </div>
                            <a href="https://lnt.org/why/7-principles/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                        <div className='margin-right-15 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <div className='sp_img_wrapper'>
                                    <img className='' alt='Protect Our Winters' src="/protect-our-winters-vector-logo.svg"></img>
                                </div>
                                <h1 className="sp_header">Protect Our Winters</h1>
                                <p className='sp_text'>We help passionate outdoor people protect the places and experiences they love from climate change.</p>
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