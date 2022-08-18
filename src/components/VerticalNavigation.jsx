import React from 'react';
import bike from "../assets/icones/bike.png";
import swim from "../assets/icones/swim.png";
import haltere from "../assets/icones/haltere.png";
import yoga from "../assets/icones/yoga.png";
import { NavLink } from 'react-router-dom';


/**
 * Display the vertical navigation bar
 * @component
 * @returns {JSX.Element} VerticalNavigation component
 */
const VerticalNavigation = () => {
    return (
        <div className='verticalNav'>
            <ul>
                <NavLink to='' className='navLink'>
                    <img src={yoga} alt="yoga" />
                </NavLink>
                <NavLink to='' className='navLink'>
                    <img src={swim} alt="swim" />
                </NavLink>
                <NavLink to='' className='navLink'>
                    <img src={bike} alt="bike" />
                </NavLink>
                <NavLink to='' className='navLink'>
                    <img src={haltere} alt="haltere" />
                </NavLink>
            </ul>
            <div className="copyright">Copyright, SportSee 2020</div>
        </div>
    );
};

export default VerticalNavigation;