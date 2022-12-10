import { Tooltip } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className='container p-5'>
            <h1 className='text-xl mb-5'>This is a chart comparing total number of quiz between topics</h1>
            <ResponsiveContainer width='90%' height={350}>
           <BarChart  data={data.data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey='name' />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
        </div>
    );
};

export default Statistics;