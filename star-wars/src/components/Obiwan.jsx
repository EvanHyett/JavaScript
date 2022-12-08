import React from 'react';
import obi from '../assets/obi.png'


const Obiwan = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-red-500 pt-2'>THESE AREN'T THE DROIDS YOU ARE LOOKING FOR</h1>
            <div className='flex flex-col items-center py-20'>
                <img src={obi} alt="obiwan" />
            </div>
        </div>
    );
};



export default Obiwan;