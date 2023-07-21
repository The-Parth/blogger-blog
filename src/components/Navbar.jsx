import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='h-14 flex items-center p-2 gap-4'>
        <div className='p-5 flex gap-4'>
            <img src={Logo} className='h-10 w-10 rounded-full'></img>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Tech</h1>
            <h1>Bussiness</h1>
            <h1>Sports</h1>
        </div>
        <div className='flex gap-2 w-full ml-4 justify-end'>
            <div className='flex gap-4 mr-5'>
            <button>Login</button>
            <button>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar