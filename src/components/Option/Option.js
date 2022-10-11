import React from 'react';

const Option = ({option}) => {
    // console.log(option);
    return (
        <div className='mt-2 border rounded-lg p-3  dark:bg-gray-800 text-gray-100'>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label " for="flexRadioDefault1">
                {option}
            </label>
        </div>
    );
};

export default Option;