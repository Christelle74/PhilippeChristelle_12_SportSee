import React from 'react';

//import Dashboard from './Dashboard';
import UserCard from '../components/UserCard';
import Homme from "../assets/icones/avatarHomme.png"
import Femme from "../assets/icones/avatarFemme.png"


/**
 * Display the home page 
 * @component
 * @returns {JSX.Element} Home component
 */
const Home = () => {
    return (
        <div className='main'>
            
            <div className='connectPage'>
                <h2 className='userCardsTitle'> Se connecter en tant que :</h2>
                <div className='userCards'>
                    <UserCard  avatar={Homme} name='Karl Dovineau' id="12"/>
                    <UserCard  avatar={Femme} name='Cecilia Ratorez' id="18"/>
                </div>
            </div>
            
        </div>
    );
};

export default Home;