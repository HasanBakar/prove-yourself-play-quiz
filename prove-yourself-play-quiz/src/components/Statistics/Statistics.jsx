import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const topics = useLoaderData();
    const {data} = topics;
    // console.log(data);
    return (
           <div className="graph-container">
                    <LineChart className="hw-reset-container shadow-lg pl-1 pr-2 shadow-red-500 rounded-xl py-3 ml-10"  width={600}
                            height={400}
                            data={data}
                               margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="4 4" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
                            <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>   
                    <div className="shadow-lg px-10 shadow-red-500 rounded-xl py-3" >
                        <h1 className="text-4xl font-bold text-fuchsia-600" >What does mean by line chart?</h1>
                        <p className="text-xl font-medium" >A line graph is commonly used to display change over time as a series of data points connected by straight line segments on two axes. The line graph therefore helps to determine the relationship between two sets of values, with one data set always being dependent on the other set.</p>
                        <p className="text-xl font-medium" >Line graphs are useful in that they show data variables and trends very clearly and can help to make predictions about the results of data not yet recorded. They can also be used to display several dependent variables against one independent variable. When comparing data sets, line graphs are only useful if the axes follow the same scales. Some experts recommend no more than 4 lines on a single graph; any more than that and it becomes difficult to interpret.</p>
                    </div>
            </div>
    );
};

export default Statistics;