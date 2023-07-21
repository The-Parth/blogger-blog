import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='h-14 flex items-center  w-full md:p-2'>
        <div className='p-5 flex gap-4'>
            <div className='flex h-10 w-10'>
            <img src={Logo} className='h-10 w-10 rounded-full'></img>
            </div>
            <div className='flex gap-4 items-center md:text-xl'>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Tech</h1>
            <h1>Bussiness</h1>
            <h1>Sports</h1>
            </div>   
        </div>
        <div className='flex gap-4 w-full ml-4 mr-24 justify-end md:mr-16'>
            <div className='flex gap-4 md:text-xl'>
            <button>Login</button>
            <button>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar