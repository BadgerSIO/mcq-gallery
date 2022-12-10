import React from 'react';
import {EyeSlashIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizCard = ({quiz}) => {
    const {options,question,correctAnswer,id}=quiz;
    const notify = () => toast(correctAnswer);
    const checkAns =(option)=>{
        if(option===correctAnswer){
            toast('Answer is correct !');
        }else{
            toast('Wrong Answer !');
        }

    }
    return (
        <div className='my-5 p-5 rounded-2xl md:w-3/4 mx-auto bg-slate-200 relative'>
            <h1 className='font-bold text-lg mb-3'>Question: {question}</h1>
            <div className='grid grid-cols-2 gap-5'>
{
    
    options.map(option=><div key={option}><input type='radio' name={id} id={option} ></input><label className='ml-3' onClick={()=>checkAns(option)} htmlFor={option}>{option}</label></div>)
}
            </div>
            <EyeSlashIcon onClick={notify} className="h-6 w-6 text-gray-500 absolute top-2 right-2"/>
            <ToastContainer position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>
        </div>
    );
};

export default QuizCard;