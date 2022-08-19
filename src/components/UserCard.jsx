import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


/**
 * @component
 * @param {Array} data - 
 * @returns {JSX.Element} UserCard component
 */
const UserCard = (data) => {
    console.log(data)
    return (
        <Link to={`/user/${data.id}`} className='userCard'>
            <li >
                <img src={data.avatar} alt="" /> 
                <p>{data.name}</p>
            </li>
        </Link>
    );
};

export default UserCard;

//Proptypes
UserCard.propTypes = {
    data: PropTypes.object.isRequired,
}