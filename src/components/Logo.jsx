import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"


/**
 * Display application's logo
 * @component
 * @returns {JSX.Element} Logo component
 */
const Logo = () => {
    return (
        <NavLink to='/' >
            <div className='logo'>
                <img src={logo} alt="logo SportSee" />
            </div>
        </NavLink>
    );
};

export default Logo;