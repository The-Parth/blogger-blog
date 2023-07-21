import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

const Navbar = () => {
  return (
    <div className='h-14 flex items-center  w-full md:p-2'>
        <div className='p-5 flex gap-6'>
            <div className='flex h-10 w-10'>
            <NavLink to='/home'><img src={Logo} className='h-10 w-10 rounded-full'></img></NavLink>
            </div>
            <div className='flex gap-6 items-center md:text-xl'>
            <NavLink to="/tech"><h1>Tech</h1></NavLink>
            <NavLink to="/bussiness"><h1>Bussiness</h1></NavLink>
            <NavLink to="/sports"><h1>Sports</h1></NavLink>
            <NavLink to="/about"><h1>About</h1></NavLink>
            </div>   
        </div>
        <div className='flex gap-4 w-full ml-4 mr-24 justify-end md:mr-16'>
            <div className='flex gap-4 md:text-xl'>
            <NavLink to='/login'><button>Login</button></NavLink>
            <NavLink to='/signup'><button>Signup</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar