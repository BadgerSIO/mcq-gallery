import React from 'react';
import {ExclamationTriangleIcon } from '@heroicons/react/24/solid'
const Error = () => {
    return (
        <div className='container p-3 text-center'>
            <ExclamationTriangleIcon className="h-10 w-10 mx-auto text-red-600"/>
            <h2 className='text-2xl font-semibold'>Opps! Page not Found</h2>
        </div>
    );
};

export default Error;