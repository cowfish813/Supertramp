import React from 'react'
import { Route, Switch, Link, HashRouter } from 'react-router-dom'
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute }from '../util/route_util'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import NavbarContainer from './navbar/navbar_container'
import Homepage from './splash/homepage_container'



// incomplete
import listIndexContainer from './listing/list_index/list_index_container'
import searchContainer from './search/search_container'
import list_index_item from './listing/list_index/list_index_item'

import Footer from './navbar/footer'
import UserShow from './users/user_container'
import ListShow from './listing/list_show/list_show_container'


// test list


//bonus
// aws connected, can upload...but model is technically incomplete
import ListForm from './listing/list_form/list_form_container'

const App = () => (
    <div className="super-body">
        < Modal />
        {/* < ProtectedRoute exact path="/create_listings/"  component={ListForm} /> */}
        < Route exact path="/" component={Homepage} />
        < Route exact path="/listings/:listingsId" component={ListShow} />
        < Route exact path ="/listings/index" component={listIndexContainer} />
        < NavbarContainer />
        {/* < Route exact path="/listings/" component={list_index_item} /> */}

        < ProtectedRoute exact path="/users/:userId" component={UserShow} />
        < Switch>
        < AuthRoute path="/login" component={LoginFormContainer} />
        < AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>

        < Footer />
    </div>
);

export default App