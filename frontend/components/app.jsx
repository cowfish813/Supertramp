import React from 'react'
import { Route, Switch, Link, HashRouter } from 'react-router-dom'
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute }from '../util/route_util'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import Homepage from './splash/homepage_container'
import User from './users/user_container'


// incomplete
import listIndexContainer from '../components/listing/list_index_container'
import searchContainer from './search/search_container'

// test list

import NavbarContainer from './navbar/navbar_container'
import LoggedBar from './navbar/logged_in_nav_container'



const App = () => (
    <div className="super-body">
        < Modal />
        < NavbarContainer />
        < LoggedBar />
        < Route exact path="/" component={Homepage} />
        < AuthRoute exact path="/" component={NavbarContainer} />
        {/* < ProtectedRoute exact path ="/" component ={LoggedBar} /> */}
        {/* <AuthRoute exact path="/" component={Homepage} /> */}
        {/* <AuthRoute exact path="/" component={NavbarContainer} /> */}
        {/* <ProtectedRoute exact path="/" component={Homepage} /> */}
        {/* <ProtectedRoute exact path="/" component={NavbarContainer} /> */}

            <ProtectedRoute exact path={`/users/:usersId`} component={User} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

    </div>
);

export default App