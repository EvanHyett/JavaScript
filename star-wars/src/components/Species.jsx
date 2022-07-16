import React from 'react';


const Species = (props) => {
    let {details} = props;

    return (
        <div>
            <h1>{details.name}</h1>
            <p>Classification: {details.classification}</p>
            <p>Designation: {details.designation}</p>
            <p>Average Lifespan: {details.average_lifespan}</p>
        </div>
    );
};



export default Species;