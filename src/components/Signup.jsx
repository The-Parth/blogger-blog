import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='bg-black drop-shadow-2xl flex-col bg-opacity-40 justify-center rounded-xl mt-32 h-fit p-5 w-fit text-white text-center m-auto'>
            <form>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type="email" name="email" placeholder='Email'></input>
                </div>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='password' name="password"  placeholder='Password'></input>
                </div>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='password' name="password"  placeholder='confirm Password'></input>
                </div>
                <div>
                    <button className='mt-5 bg-slate-400 p-1 rounded-lg'>Signup</button>
                </div>
            </form>

        </div>
    )
}

export default Signup