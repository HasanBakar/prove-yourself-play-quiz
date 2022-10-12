import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import Options from './../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({q}) => {
    const {question,options,correctAnswer} = q;
    const notify = () => {
        toast.success(`Answer: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }

    return (
        <div>
            
            <h1 className="text-2xl text-pink-600" >{question}</h1>
            <div className="grid grid-cols-6 gap-2">
               <div className="col-span-5">
                    <div className="grid grid-cols-2 gap-2">
                    {
                        options.map((alternate, index) => <Options
                        key={index}
                        alternate={alternate}
                        ></Options>)
                    }
                    </div>
               </div>
                <div className="flex items-center">
                    <p>Click for help:</p>
                    <EyeIcon onClick={notify} className="h-8 w-8 ml-1 text-green-500"/>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Question;