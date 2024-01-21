import React, { useState,useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () =>{
        //Validate form data
        const message = checkValidData(email.current.value, password.current.value, name.current.value);
        setErrorMessage(message);

    }
    const toggleSignInForm = () =>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg' alt='logo'/>
        </div>

        <form onSubmit={(e)=>e.preventDefault()}
        className='absolute flex flex-col w-3/12 my-36 mx-auto right-0 left-0 p-12 text-white bg-black bg-opacity-80 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>
            { isSignIn ? "Sign in" : "Sign Up" }</h1>
           
           {!isSignIn && 
           <input
           ref={name}
           type='text'
           placeholder='Full Name' 
           className='p-3 m-2 w-full bg-neutral-700 rounded-md'/>}
           
           {!isSignIn && <input type='tel'
           placeholder='Phone Number' 
           className='p-3 m-2 w-full bg-neutral-700 rounded-md'/>}

            <input 
            ref={email}
            type='text' 
            placeholder='Email or Phone Number' 
            className='p-3 m-2 w-full bg-neutral-700 rounded-md'
            />
           
            <input 
            ref={password}
            type='password' 
            placeholder='Password'
            className='p-3 m-2 w-full bg-neutral-700 rounded-md'
             />
            
            <p className='text-red-500  font-bold py-2'>{errorMessage}</p>
            <button className='bg-red-600 p-2 m-2 mt-7 w-full rounded-md cursor-pointer' onClick={handleButtonClick}>
                { isSignIn ? "Sign in" : "Sign Up" }
            </button>

            <p onClick={toggleSignInForm} className='cursor-pointer py-4'>
                {isSignIn 
                ?"New to Netflix? Sign Up Now."
                : "Already Registered? Sign In Now."}
            </p>

            <p className=' text-neutral-400 text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </form>
    </div>
  )
}

export default Login