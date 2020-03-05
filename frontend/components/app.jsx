
import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'

import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { Route, Switch, Link, HashRouter } from 'react-router-dom'
import { AuthRoute }from '../util/route_util'
import listIndexContainer from '../components/listing/list_index_container'
import searchContainer from './search/search_container'


const App = () => (
    <div className="super-body">
        <div className="superNav">
            <div className="nav-left">
                <Link to="/" className="logo">SuperTramp logo goes here</Link> {/* use image AWS */}
            </div>

            <div className="nav-right">
                <li className="navItem"><a>Near Me</a></li>
                <li className="navItem"><a>Become a Host</a></li>
                <li className="navItem"><a>About</a></li> {/* link to my linked in or transfer to bottom of page? */}
                {/* possible div menu nested in super nav near nav right */}
                <li className="navItem"><a>Log In</a></li> {/* another modal button*/}
                <li className="navItem signupButton"><a>Sign up</a></li> {/* placeholder, possibly more div*/}
                < Modal />
            </div>

        </div>

        <header>
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
                        </h2>
                    </div>
                </div>

                <div className="superSearch">
                    <div className="searchBar"></div>
                    <div className="enterDate"></div>
                    <div className="dropdown"></div>
                    <div className="searchButton">Search</div>

                </div>
            {/* <Route exact path="/" component={searchContainer} /> */}
            </div>
            {/* <GreetingContainer /> */}
        </header>
            <div className="containerBanner"></div>
            {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
            
        
            <div className="tilesContainer">
                <div className="tiles_tile">

                </div>
            </div>
        
        
        <footer>{/*  linkedin, other projs, instagram? , notes about the site*/}</footer>
    </div>
);

export default App