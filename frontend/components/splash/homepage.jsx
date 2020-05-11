import React from 'react';
import SearchBar from '../search/search_container';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleInput() {
        window.scrollTo({
            left: 0, top: 1450, behavior: 'smooth'})
    }

    render() {
        return (
            <div className="">
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
                    < SearchBar />
                </div>
                <div className="containerBanner">
                    <img src="https://hipcamp-res.cloudinary.com/image/upload/c_thumb,w_1080/v1498456730/campground-photos/yene977lfve4yhhnokuh.jpg" alt="bannerbar"
                    className="bannerImg"
                    />
                    <div className="banner_message">
                        <div >
                                <span className="banner_font">Explore a Dozen Locations!</span>
                            {/* <span className="banner_font">Locations!</span> */}
                        </div>
                            <span className="banner_sub_message">Run a search or scroll down below</span>
                            <span className="banner_sub_message">and start exploring!</span>

                        <div className="intro_button_container">
                            <button onClick={this.handleInput} className="intro_button">I'm feeling Lucky!</button>
                        </div>
                    </div>                  
                </div>
                <div className="tilesContainer">
                    <div className="tiles_tile">
                        <Link to="/"><img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1513711999/campground-photos/jxhpqyakfthq93t8on4x/mudita-camel-s-yurt-camels-and-a-yurt-animal-camel.jpg" alt=""/></Link>
                        <Link to="/"><img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/></Link>
                        <Link to="/"><img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1572899400/campground-photos/hamwjtqwsdqffioglcvq/tiny-house-in-happy-valley-tiny-house-glamping-mountains.jpg" alt=""/></Link>

                    </div>
                </div>
                {/* <p>destination getaways.</p> */}
                <div className="vagueLocationsContainer">
                    <div className="vague_tile_list">
                        <Link to="/listings/1"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg" alt="" /></Link>
                        <Link to="/listings/2"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg" alt="" /></Link>
                        <Link to="/listings/3"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg" alt=""/></Link>
                    </div>
                    <div className="vague_tile_list">
                        <Link to="/listings/4"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg" alt="" /> </Link>
                        <Link to="/listings/5"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg" alt=""/></Link>
                        <Link to="/listings/6"><img className="vague_picture" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg" alt=""/></Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(Homepage);