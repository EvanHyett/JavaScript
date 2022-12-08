import React from 'react';


const People = (props) => {
    let {details} = props;

    return (
        <div className='text-blue-500 text-2xl'>
            <h1>{details.name}</h1>
            <p>Height: {details.height}</p>
            <p>Mass: {details.mass}kg</p>
            <p>Hair Color: {details.hair_color}</p>
            <p>Skin Color: {details.skin_color}</p>
        </div>
    );
};


export default People;