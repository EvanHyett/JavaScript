import React from 'react';

const Planets = (props) => {
    let {details} = props;

    return (
        <div className='text-green-500 text-2xl'>
            <h1>{details.name}</h1>
            <p>Diameter: {details.diameter}</p>
            <p>Climate: {details.climate}</p>
            <p>Terrain: {details.terrain}</p>
            <p>Population: {details.population}</p>
        </div>
    );
};


export default Planets;