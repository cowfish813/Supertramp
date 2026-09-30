import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openModal as openModalAction } from '../../actions/modal_actions/modal_actions';
import { logout as logoutAction } from '../../actions/session_actions';
import NavSearch from './nav_search';

const NavBar = () => {
    const [hasOriginSearch, setHasOriginSearch] = useState(false);
    const [isOriginSearchVisible, setIsOriginSearchVisible] = useState(true);

    const currentUser = useSelector(state => state.entities.users[state.session.currentUser]);
    const ID = useSelector(state => state.session.currentUser);
    
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const openModal = modal => dispatch(openModalAction(modal));
    const logout = () => dispatch(logoutAction());

    const checkOriginSearch = () => {
        const el = document.getElementById('origin-search');
        const has = !!el;
        const visible = el ? el.getBoundingClientRect().top > 0 : false;
        setHasOriginSearch(has);
        setIsOriginSearchVisible(visible);
    }

    useEffect(() => {
        checkOriginSearch();
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const el = document.getElementById('origin-search');
            if (!el) return;
            setIsOriginSearchVisible(el.getBoundingClientRect().top > 0);
        }
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        logout().then(() => history.push('/'));
    }

    const searchInput = (!hasOriginSearch || !isOriginSearchVisible) ? 
        < NavSearch/> : null;
    
    return (
        <div className="super-nav">
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img
                        className="logo-pic"
                        src="/assets/favicon.ico"
                    />
                </Link>
                {searchInput}
            </div>

            <div className="nav-right">
                <div className="navItem"><a target="_blank" href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></div>
                <div className="navItem"><a target="_blank" href="https://github.com/cowfish813">GitHub</a></div>
                <div className="navItem"><a target="_blank" href="https://www.instagram.com/probablynotnick/">Instagram</a></div>

                {currentUser ? (
                <>
                    <div className="navItem"><Link to={`/users/${ID}`}>Self</Link></div>
                    <button className="navItem logoutButton" onClick={handleLogout}>Log Out</button>
                </>
                ) : (
                <>
                    <div className="navItem"><a onClick={() => openModal('Login')}>Log In</a></div>
                    <button className="navItem signupButton" onClick={() => openModal('Signup')}>Sign Up</button>
                </>
                )}
            </div>
        </div>
    )
}

export default NavBar;