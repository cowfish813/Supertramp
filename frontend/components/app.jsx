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



const App = () => (
    <div className="super-body">
        < Modal />
        < NavbarContainer />
        < Route exact path="/" component={Homepage} />
        < Route exact path="/" component={listIndexContainer} />

            <ProtectedRoute exact path={`/users/:usersId`} component={User} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App