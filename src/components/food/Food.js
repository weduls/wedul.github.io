import React from "react";
import PropTypes from 'prop-types';

function Food({name, image, rating}) {
    return (
        <div>
            <h2>I like { name }</h2>
            <h4>{rating}/5.0</h4>
            <img src={image} alt={name}/>
        </div>
    );
}

{/*// prop-types를 사용해서 타입에 대한 validation처리가 가능하다. isRequired는 필수는 아님*/}
Food.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number
}

export default Food;