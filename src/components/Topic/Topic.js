import React from 'react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
const Topic = ({topic}) => {
    const {id,name,logo,total}=topic;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/quiz/${id}`)
    }
    return (
       <div className='flex bg-green-200'>
        <div><img src={logo} alt='' className='w-36 bg-[#151515] rounded-md'></img></div>
        <div className='p-3 relative grow'>
            <h1 className='text-2xl'>{name}</h1>
            <h3>Total quiz:{total}</h3>
            <button onClick={handleNavigate} className='py-2 px-3 bg-white absolute right-4 bottom-2'>Start Quiz <ArrowRightOnRectangleIcon className="h-6 w-6 text-black inline"/></button>
            
        </div>
       </div>
    );
};

export default Topic;