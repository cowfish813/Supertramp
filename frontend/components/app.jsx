import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute }from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import UserShow from './users/user_show_container';
import Footer from './navbar/footer' 
import Homepage from './splash/homepage_container';
import ListShow from './listing/list_show/list_show_container';
import ListSearchResults from './listing/list_index/list_search_results_container';
import NoContent from './no_content';

import UserUpdate from './users/user_update_container';
import ListForm from './listing/list_form/list_form_container';

const App = () => (
    <div className="super-body">
        < Modal />
        < NavbarContainer />
        < Switch>
            < ProtectedRoute exact path="/users/:userId" component={UserShow} />
            < ProtectedRoute exact path="/users/:userId/update" component={UserUpdate} />
            < Route exact path="/" component={Homepage} />
            < Route exact path="/listings/:listingsId" component={ListShow} />
            < Route exact path ="/search/:query" component={ListSearchResults} />
            < AuthRoute path="/login" component={LoginFormContainer} />
            < AuthRoute path="/signup" component={SignupFormContainer} />
            < Route path="" component={NoContent} />
        </Switch>
        < Footer />
        < ProtectedRoute exact path="/create_listings/"  component={ListForm} /> 
    </div>
);

export default App;