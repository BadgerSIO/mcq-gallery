import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {
    const quiz = useLoaderData();
    const {name,questions,total,logo}=quiz.data;
 
    return (
        <div className='container p-3 text-center'>
            <div className='text-center'>
                <img src={logo} alt="" className='w-20 mx-auto bg-black'></img>
                <h1 className='text-2xl font-semibold capitalize my-4'>Quiz Topic {name}</h1>
            <h2>Total Quiz: {total}</h2>
            </div>
            {
                questions.map(quiz=><QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
            }
           
        </div>
    );
};

export default Quiz;