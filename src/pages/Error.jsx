import React from 'react';
import { NavLink } from 'react-router-dom'


/**
 * Creation of 404 error page with link back to home page 
 * @component
 * @returns {JSX.Element} Error component
 */
const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={process.env.PUBLIC_URL + '/'}>Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default Error;