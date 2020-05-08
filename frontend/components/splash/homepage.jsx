import React from 'react';
import SearchBar from '../search/search_container';


class Homepage extends React.Component {
    constructor(props) {
        super(props)
        
    };






    render() {

        // let house = ["All Camping", "Camping", "Glamping", "RV", "Plot of Land"]
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

                    {/* tags/index searches begin */}
                <div className="containerBanner">
                    <img src="https://hipcamp-res.cloudinary.com/image/upload/c_thumb,w_1080/v1498456730/campground-photos/yene977lfve4yhhnokuh.jpg" alt="bannerbar"
                    className="bannerImg"
                    />
                    <div className="banner_message">
                        <span className="">Explore a Dozen Locations!</span>
                    </div>
                                    
                </div>

                <div className="tilesContainer">
                    {/* <p>One of a kind trips.</p> */}
                    <div className="tiles_tile">
                        <img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1513711999/campground-photos/jxhpqyakfthq93t8on4x/mudita-camel-s-yurt-camels-and-a-yurt-animal-camel.jpg" alt=""width="350" height="635" />
                        <img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                        <img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1572899400/campground-photos/hamwjtqwsdqffioglcvq/tiny-house-in-happy-valley-tiny-house-glamping-mountains.jpg" alt=""/>

                    </div>
                </div>
                {/* <p>destination getaways.</p> */}
                <div className="vagueLocationsContainer">
                    <div className="vague_tile_list">
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/17855640_10105438859618553_1862219686291433231_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=U1_h6a7o6CgAX-BtgmW&_nc_ht=scontent-sjc3-1.xx&oh=97b66ead3b62704bba16c55dec9a9f20&oe=5E91FBB6" alt=""/>
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-0/p640x640/17545579_10105436252223793_1168540811776764446_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=TItZtSvpwXoAX9W1YTR&_nc_ht=scontent-sjc3-1.xx&_nc_tp=6&oh=4fa3e64bfc9534ed8f3795eec954cdd6&oe=5E919946" alt=""/>
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/s960x960/28828057_10106502756296083_3917095514831156302_o.jpg?_nc_cat=101&_nc_sid=dd7718&_nc_ohc=tFpgaFmNfcEAX9-ryE1&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=16fb9ce5ffdb90b571185a687b33fddb&oe=5E8F3487" alt=""/>
                    </div>
                    <div className="vague_tile_list">
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p640x640/57056162_10107436356788213_4281326518522609664_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=322FlBr4dUIAX-HT4QP&_nc_ht=scontent-sjc3-1.xx&_nc_tp=6&oh=33abedf7f5900521d7d4c0336ac93c62&oe=5E8E2E58" alt=""/>
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/s960x960/28516642_10106468836212203_4628740970091386634_o.jpg?_nc_cat=107&_nc_sid=dd7718&_nc_ohc=pCHQcZDsE3MAX9ze75a&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=d735eb1e89a570d57d077f531f865556&oe=5E9037F2" alt=""/>
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/56312133_10107420712439613_2489365651806748672_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=EEpCQPYZYqsAX9dV6Tw&_nc_ht=scontent-sjc3-1.xx&oh=23903ea9d5ae916657b62d1cd23962c5&oe=5E901B7D" alt=""/>
                    </div>
                </div>

                {/* <p>Discover camping...</p> */}
                <div className=""></div>

                {/* footer begins */}
                {/* links to etc. */}
            </div>
        )
    };
};

export default Homepage;