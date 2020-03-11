import React from 'react'
import Navbar from '../navbar/navbar_container'
// import banner from '../../../app/assets/images/banner'


class Homepage extends React.Component {
    constructor(props) {
        super(props)
        
        // prop must take in dates, type and search term prop for state
    }






    render() {

        const house = ["All Camping", "Camping", "Glamping", "RV", "Plot of Land"]
        return (
            <div className="">
             {/* < Navbar /> */}
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
                                campsites, cabins, parks, and public highways
                                that don't belong to you
                        </h2>
                        </div>
                    </div>
                    {/* search bar begins */}
                    <form>
                        <div className="superSearch">

                            <div className="searchBar">
                                <input className="search" type="search" placeholder="Search..." />
                            </div>
                            <div className="datebox">
                                <div className="filterButton">
                                    <div>
                                        <input type="date"/>
                                    </div>
                                    {/* future modal? */}
                                </div>
                            </div>

                            <div className="dropdownMenu">
                                <select className="menuSelect"> 
                                    {house.map( (tent,i) => 
                                        <option className="menuSelected" key={i} value={i}>{tent}</option>
                                        )}
                                </select>
                            </div>
                            <button className="searchButton">Search</button>
                        </div>
                    </form>
                </div>
                    {/* search bar ends */}

                    {/* tags/index searches begin */}
                <div className="containerBanner">
                    <img src="https://hipcamp-res.cloudinary.com/image/upload/c_thumb,w_1080/v1498456730/campground-photos/yene977lfve4yhhnokuh.jpg" alt="bannerbar"
                    className="bannerImg"
                    />
                                    
                </div>

                <div className="tilesContainer">
                    {/* <p>One of a kind trips.</p> */}
                    <div className="tiles_tile">
                        <img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1513711999/campground-photos/jxhpqyakfthq93t8on4x/mudita-camel-s-yurt-camels-and-a-yurt-animal-camel.jpg" alt=""/>
                        <img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                        <img className="poppingRectangle" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1572899400/campground-photos/hamwjtqwsdqffioglcvq/tiny-house-in-happy-valley-tiny-house-glamping-mountains.jpg" alt=""/>

                    </div>
                </div>
                {/* <p>destination getaways.</p> */}
                <div className="vagueLocationsContainer">
                    <div className="vague_tile_list">
                        <img className="vague_picture" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/17855640_10105438859618553_1862219686291433231_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=U1_h6a7o6CgAX-BtgmW&_nc_ht=scontent-sjc3-1.xx&oh=97b66ead3b62704bba16c55dec9a9f20&oe=5E91FBB6" alt=""/>
                        <img className="vague_picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/17855640_10105438859618553_1862219686291433231_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=U1_h6a7o6CgAX-BtgmW&_nc_ht=scontent-sjc3-1.xx&oh=97b66ead3b62704bba16c55dec9a9f20&oe=5E91FBB6" alt=""/>
                    </div>
                    <div className="vague_tile_list">
                        <img className="vague_picture" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                        <img className="vague_picture" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                        <img className="vague_picture" src="https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_546/v1494284717/campground-photos/cy19txhitis6xwltkdhu/ardor-wood-farm-glamping-glen-forest-people-dog.jpg" alt=""/>
                    </div>
                </div>

                {/* <p>Discover camping...</p> */}
                <div className=""></div>

                {/* footer begins */}
                {/* links to etc. */}
            </div>
        )
    }
}

export default Homepage