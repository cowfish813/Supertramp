import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { createRoot } from 'react-dom/client'; // Import createRoot
import {fetchListings} from './actions/listing_actions/listing_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    const rootInstance = createRoot(root); // Create root instance
    rootInstance.render(<Root store={store} />); // Render app using root
});