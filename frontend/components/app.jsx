import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute }from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import UserShow from './users/user_show_container';
import Footer from './navbar/footer' //could add a little more work
// incomplete
// import listIndexContainer from './listing/list_index/list_index_container';
import Homepage from './splash/homepage_container';
import ListShow from './listing/list_show/list_show_container';
import ListSearch from './listing/list_index/lsit_search_container'
//bonus
// aws connected, can upload...but model is technically incomplete
import ListForm from './listing/list_form/list_form_container';
//reviews

const App = () => (
    <div className="super-body">
        < Modal />
        < Route exact path="/" component={Homepage} />
        < Route exact path="/listings/:listingsId" component={ListShow} />
        {/* < Route exact path ="/index" component={listIndexContainer} /> */}
        < Route exact path ="/listings" component={ListSearch} />
        < NavbarContainer />
        < ProtectedRoute exact path="/users/:userId" component={UserShow} />
        < Switch>
        < AuthRoute path="/login" component={LoginFormContainer} />
        < AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
        < Footer />
        {/* bonus/incomplete */}
        < ProtectedRoute exact path="/create_listings/"  component={ListForm} /> 
    </div>
);

export default App;