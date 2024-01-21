import React from 'react'

const Header = () => {
  return (
    <div className='absolute z-10 flex flex-row justify-between'>
     
        <img className='w-full h-24 px-4 py-2 m-8 bg-gradient-to-b from-black'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
        
       {/* <button className='bg-red-600 text-white p-4 m-5 w-32 h-16'>Sign In</button> */}
    </div>
  )
}

export default Header