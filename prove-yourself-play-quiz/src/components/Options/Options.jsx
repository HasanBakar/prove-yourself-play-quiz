import React from 'react';



const Options = ({alternate,notify}) => {

    return (
        <div>
            
           <div className="grid grid-cols-2">
             {
               <p className="bg-sky-400 p-3 my-4 rounded-lg"> <input type="radio" value={alternate} name="option" /> {alternate}</p>
            } 
           </div>
        </div>
    );
};

export default Options;