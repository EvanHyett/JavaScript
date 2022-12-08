import React from 'react';

const Films = (props) => {
    let {details} = props;

    return (
        <div className='text-orange-500 text-2xl'>
            <h1>{details.title}</h1>
            <p>Director: {details.director}</p>
            <p>Producer: {details.producer}</p>
            <p>Release Date: {details.release_date}</p>
        </div>
    );
};


export default Films;