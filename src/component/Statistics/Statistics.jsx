import React from 'react';
import './Statistics.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const AssMark = [
        {
            name: "Assignment 1",
            mark: 60
        },
        {
            name: "Assignment 2",
            mark: 60
        },
        {
            name: "Assignment 3",
            mark: 59
        },
        {
            name: "Assignment 4",
            mark: 60
        },
        {
            name: "Assignment 5",
            mark: 59
        },
        {
            name: "Assignment 6",
            mark: 60
        },
        {
         
            name : "Assignment 7",
            mark : 60
        },
    ];

    return (
        <div className='chart-container'>
            <h2 className='title'>Assignment Analytics</h2>

            <div className='chart'>
            <AreaChart
          width={900}
          height={400}
          data={AssMark}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="mark" />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </div>

           
        </div>
    );
};

export default Statistics;