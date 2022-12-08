import React from 'react';


const Starships = (props) => {
    let {details} = props;

    return (
        <div className='text-purple-500 text-2xl'>
            <h1>{details.name}</h1>
            <p>Model: {details.model}</p>
            <p>Manufacturer: {details.manufacturer}</p>
            <p>Passengers: {details.passengers}</p>
        </div>
    );
};


export default Starships;