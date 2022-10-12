import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, correctAnswer}) => {
    // const {id ,correctAnswer} = quiz
    // console.log();
    // console.log(correctAnswer);
    const notify = () => toast(showResult())
    const showResult= ()=>{
        if(correctAnswer === option){
            return 'Congratulation..! Correct Answer'
        }
        else{
            return 'Incorrect Answer. Try Again'
        }
    }
    
    return (
       <div>
         <div   className='form-check ml-2 mb-2 mt-3 border rounded-lg p-3  dark:bg-gray-800 text-gray-100'>
            
            <input  type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={notify} />
                <label  className="form-check-label" for="flexRadioDefault1" >
                
                {option}
                
            </label>
            
            <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
        </div>
        
       </div>
    );
};

export default Option;