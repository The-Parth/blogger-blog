import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate=useNavigate();
    const [newAuth, setnewAuth] = useState({
        "name":"",
        "email":"",
        "password":""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setnewAuth((prevVal)=>{
            return({
                ...prevVal,
                [name]:value
            })
        })
    }
    
    const handleClick= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name:newAuth.name,email:newAuth.email,password:newAuth.password})
          });
          const Data=await response.json();
          if(Data.success){
            localStorage.setItem("token",Data.token)
            navigate("/")
          }else{
            alert(Data.Error)
          }
        }


    return (
        <div className='bg-black drop-shadow-2xl flex-col bg-opacity-40 justify-center rounded-xl mt-32 h-fit p-5 w-fit text-white text-center m-auto'>
            <form>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' name="name" placeholder='Name' onChange={handleChange}></input>
                </div>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='email' name="email"  placeholder='email' onChange={handleChange}></input>
                </div>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='password' name="password"  placeholder='Password' onChange={handleChange}></input>
                </div>
                <div>
                    <button className='mt-5 bg-slate-400 p-1 rounded-lg' onClick={handleClick}>Signup</button>
                </div>
            </form>

        </div>
    )
}

export default Signup