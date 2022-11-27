import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner flex  '>
            <div className='width'>
                <p className='text-6xl py-10 font-bold'>Getting out the best level</p>
                <p className='text-2xl  pb-10'>Wellcome the world of page of knowledge which may give you a feel of plessure and experience. Try this one just now and share your xp.</p>
                <button className="btn  text-light  btn-info m-3">Give a request</button>
                <button className="btn  btn-success m-3">Book order</button>


                
            </div>

            
        </div>
    );
};

export default Banner;