import React from 'react';



const Options = ({alternate,matchAnsHandle}) => {

    return (
        <div>
            
           <div className="grid grid-cols-2">
                <div onClick={() =>matchAnsHandle(`${alternate}`)} className="flex items-center bg-sky-400 p-3 my-4 rounded-lg">
                      {
                      <input className="h-6 w-6 m-1" type="radio" value={alternate} name="option" />
                      }
                      {
                        <p id={alternate}>{alternate}</p>
                      } 
                </div>
           </div>
        </div>
    );
};

export default Options;