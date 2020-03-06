
import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'

import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { Route, Switch, Link, HashRouter } from 'react-router-dom'
import { AuthRoute }from '../util/route_util'
import listIndexContainer from '../components/listing/list_index_container'
import searchContainer from './search/search_container'
import NavbarContainer from './navbar/navbar_container'


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
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            
        
            <div className="tilesContainer">
                <div className="tiles_tile">

                </div>
            </div>   
    </div>
);

export default App