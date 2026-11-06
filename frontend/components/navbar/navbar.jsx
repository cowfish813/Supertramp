import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openModal as openModalAction } from '../../actions/modal_actions/modal_actions';
import { logout as logoutAction } from '../../actions/session_actions';
import NavSearch from './nav_search';

const NavBar = () => {
    const [hasOriginSearch, setHasOriginSearch] = useState(false);
    const [isOriginSearchVisible, setIsOriginSearchVisible] = useState(true);

    const [compact, setCompact] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    useLayoutEffect(() => {
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

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const onChange = e => {
            setCompact(e.matches);
            if (!e.matches) setMenuOpen(false);
        }
        setCompact(mediaQuery.matches)
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        logout().then(() => history.push('/'));
    };
const showNavSearch = !hasOriginSearch || !isOriginSearchVisible;

    const navLinks = (
        <>
            <div className="navItem"><a target="_blank" href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></div>
            <div className="navItem"><a target="_blank" href="https://github.com/cowfish813">GitHub</a></div>
            <div className="navItem"><a target="_blank" href="https://cowfish813.github.io/Portfolio">Portfolio</a></div>
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
        </>
    );
    
    return (
        <div className="super-nav">
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img
                        className="logo-pic"
                        src="/7789930-middle.png"
                    />
                </Link>
                <div
                    className={`nav-search-slot ${showNavSearch ? ' is-visible' : ''}`}
                    aria-hidden={!showNavSearch}
                >
                    <NavSearch />
                </div>
            </div>

            {compact ? (
                <button
                    className="nav-burger"
                    onClick={() => 
                        setMenuOpen(e => !e)
                    }
                    aria-label='Toggle Menu'
                    aria-expanded={menuOpen}
                >
                    <span/>
                    <span/>
                    <span/>
                </button>
            ): (
                <div className="nav-right">{navLinks}</div>
            )}

            {compact && (
                <div
                    className={`nav-drawer ${menuOpen ? 'open' : ''}`}
                    aria-hidden={!menuOpen}
                    onClick={() => setMenuOpen(false)}
                >
                    {navLinks}
                </div>
            )}

        </div>
    )
};

export default NavBar;