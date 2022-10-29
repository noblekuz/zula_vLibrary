import React, { FC, InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    placeholder?: string;
    type?: string;
}
const Input: FC<InputProps> =({ name, placeholder, type})=>{
    return(
        <div className='input-wrapper'>
            
           
            
            <div className='input-and-btn-wrapper'>
            <input className='input_style' id={name} placeholder={placeholder} type={type}></input>
            <button className='goto_btn'>
                
            </button>
            </div>
           
        </div>
    )
}

export default Input;