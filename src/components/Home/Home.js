import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const ldata = useLoaderData();
    const {data}=ldata;
    return (
        <div className=' container p-3'>
            <div className='h-[45vh] flex flex-col justify-center items-start'>
                <h1 className='text-5xl lg:text-7xl font-semibold'>Quiz yourself on Coding!</h1>
                <h1 className='text-xl lg:text-3xl  mt-10'>Choose a topic from below and start your coding journey Today !</h1>
                <div>

                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(topic=><Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;