import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom'



/**
 * Display the application's header with navigation
 * @component
 * @returns {JSX.Element} Header component
 */
const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <div className="navigation">
                <ul>
                    <NavLink to='/' className='navLink'>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="" className='navLink'>
                        <li>Profil</li>
                    </NavLink>
                    <NavLink to="" className='navLink'>
                        <li>Réglage</li>
                    </NavLink>
                    <NavLink to="" className='navLink'>
                        <li>Communauté</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;