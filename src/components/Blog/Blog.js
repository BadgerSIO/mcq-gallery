import React from 'react';

const Blog = () => {
    return (
        <div className='container p-3'>
            <h1 className='text-center text-xl font-semibold uppercase'>Blog Page</h1>
            <div className='p-5 m-5 rounded-lg bg-slate-200 md:w-3/4 lg:w-2/4 mx-auto'>
                <h2 className='text-2xl font-semibold capitalize mb-5'>what is the purpose of react router</h2>
                <p className='text-base leading-7'>A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.</p>
            </div>
            <div className='p-5 m-5 rounded-lg bg-slate-200 md:w-3/4 lg:w-2/4 mx-auto'>
                <h2 className='text-2xl font-semibold capitalize mb-5'>how does context api works</h2>
                <p className='text-base leading-7'>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

                In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div className='p-5 m-5 rounded-lg bg-slate-200 md:w-3/4 lg:w-2/4 mx-auto'>
                <h2 className='text-2xl font-semibold capitalize mb-5'>About useRef hook in react</h2>
                <p className='text-base leading-7'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

                A common use case is to access a child imperatively.Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blog;