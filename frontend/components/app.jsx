
import React from 'react'
import GreetingContainer from './greeting/greeting_container'

import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { Route } from 'react-router-dom'
import { AuthRoute }from '../util/route_util'
import listIndexContainer from '../components/listing/list_index_container'
import searchContainer from '../components/listing/search_container'


const App = () => (
    <div>
        <header>
            <h1>SuperTramp</h1>
            <GreetingContainer className="greetcontainer"/>
            
        </header>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={searchContainer} />

        <footer>
            {/*  linkedin, other projs, instagram? , notes about the site*/}
        </footer>
    </div>
);

export default App