import React from 'react';
import NotFound from '../../assets/images/404.png'

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <img src={NotFound} alt="" />
            <p className='font-bold mt-3'>The Page you're looking for is unavailable</p>
            <p className='font-bold'>Please check the link URL</p>
        </div>
    );
};

export default ErrorPage;