import React from 'react';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className="bg-fuchsia-100 p-10 flex items-center justify-center shadow-lg shadow-red-300 rounded-2xl">
            <img className="w-72 md:w-60 mr-5" src={logo} alt="" />
            <div className= "ml-8">
                <h1 className="text-5xl md:text-4xl sm:texl-2xl py-1" >Name: {name} </h1>
                <h3 className="text-2xl md:text-1xl sm:text-xl py-1" >Question: {total} </h3>
                <button className="btn btn-primary my-1">Try yourself</button>
            </div>
        </div>
    );
};

export default Topic;