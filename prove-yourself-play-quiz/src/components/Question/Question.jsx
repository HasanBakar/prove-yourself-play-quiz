import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import Options from './../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({q}) => {
    const {question,options,correctAnswer} = q;

    const notify = () => {
        toast.info(`Answer: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      };

      const matchAnsHandle = (answer) =>{
        const yAnswerElement = document.getElementById(answer);
        const yAnswer = yAnswerElement.innerText;
        console.log(correctAnswer);
        if(yAnswer === correctAnswer){
            console.log(correctAnswer);
             toast.success(`Right Answer: ${correctAnswer}`, {
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
        else{       

             console.log(yAnswer);
                     toast.error( `WRONG AnSwEr: ${yAnswer}`, {
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
      };

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
                        matchAnsHandle={matchAnsHandle}
                        ></Options>)
                    }
                    </div>
               </div>
                <div className="flex items-center">
                    <p className=" text-cyan-600 font-semibold">Click for help:</p>
                    <EyeIcon onClick={notify} className="h-8 w-8 ml-1 text-cyan-600"/>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Question;