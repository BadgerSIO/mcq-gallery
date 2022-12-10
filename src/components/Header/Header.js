import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const activeNav=`capitalize font-semibold text-green-600 bg-white py-2 px-3 inline-block mb-2 w-full`;
    const defaultNav=`capitalize font-semibold  py-2 px-3 inline-block mb-2`
    const [open,setOpen]=useState(false);
    return (
        <nav className='bg-green-300 p-3'>
            <div className='container flex justify-between items-center'>
            <h1 className='text-xl font-bold uppercase'>MCQ Gallery</h1>
            <ul className={open?'md:flex items-center md:space-x-5 absolute md:static right-0 top-12 w-full z-50 bg-slate-300':"md:flex items-center md:space-x-5 absolute md:static right-0 -top-56"}>
                <li><NavLink
                to='/'
                className={({isActive })=>
            isActive? activeNav : defaultNav
            }
                >topics</NavLink></li>
                <li><NavLink
                to='/statistics'
                className={({isActive })=>
            isActive? activeNav : defaultNav
            }
                >Statistics</NavLink></li>
                <li><NavLink
                to='/blog'
                className={({isActive })=>
            isActive? activeNav : defaultNav
            }
                >blog</NavLink></li>
            </ul>
            {
                open?<XMarkIcon onClick={()=>setOpen(!open)} className="h-6 w-6 text-black md:hidden"/>:<Bars3BottomRightIcon onClick={()=>setOpen(!open)} className="h-6 w-6 text-black md:hidden"/>
            }
            
            
            </div>
        </nav>
    );
};

export default Header;