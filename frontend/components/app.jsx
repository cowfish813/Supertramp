import React from 'react'
import { Route, Switch, Link, HashRouter } from 'react-router-dom'
import Modal from './modal/modal'
import { AuthRoute }from '../util/route_util'
import NavbarContainer from './navbar/navbar_container'


// incomplete
import listIndexContainer from '../components/listing/list_index_container'
import searchContainer from './search/search_container'

// test list
import GreetingContainer from './greeting/greeting_container'
import Errors from './errors/errors'



const App = () => (
    <div className="super-body">
        < NavbarContainer/>
        < Modal />

        <header>
            {/* banner component */}
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
                <div className="superSearch">
                    <div className="searchBar"></div>
                    <div className="enterDate"></div>
                    <div className="dropdown"></div>
                    <div className="searchButton">Search</div>
                </div>
            </div>
            {/* banner component ends */}
        </header>
            <div className="containerBanner"></div>
            
        
            <div className="tilesContainer">
                <div className="tiles_tile">

                </div>
            </div>   
            {/* <Errors /> */}
            {/* useless */}
            {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App