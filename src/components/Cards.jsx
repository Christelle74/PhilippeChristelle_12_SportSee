
import React from 'react';
import PropTypes from 'prop-types'


/**
 * Creation of component Cards with icon, (calories, proteins, lipids and carbohydrats)
 * @component
 * @param {String} image - the card'icone 
 * @param {Integer} data - quantity number  
 * @param {String = 'g, kcal'} unit - unity 
 * @param {String = "calories, proteins, lipids, carbohydrats"} text - text
 * @returns {JSX.Element} cards component
 */
const Cards = ({image, data,unit, text}) => {
    
    return (
        <div className='card'>
            <img src={image} alt="" className='cardImage'/>
            <div className='cardNumber'>
                <h3 className='cardUnit'>{data}{unit}</h3>
                <p className='cardText'>{text}</p>
            </div>
        </div>
    );
};

export default Cards;


//Proptypes
Cards.propTypes = {
    image: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}