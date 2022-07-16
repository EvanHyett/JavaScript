import React from 'react';


const Vehicles = (props) => {
    let {details} = props;

    return (
        <div>
            <h1>{details.name}</h1>
            <p>Model: {details.model}</p>
            <p>Manufacturer: {details.manufacturer}</p>
            <p>Passengers: {details.passengers}</p>
        </div>
    );
};



export default Vehicles;