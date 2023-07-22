import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login2 = () => {
    const navigate=useNavigate();
    const [Auth, setAuth] = useState({
        "email":"",
        "password":""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setAuth((prevVal)=>{
            return({
                ...prevVal,
                [name]:value
            })
        })
    }
    
    const handleClick= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:Auth.email,password:Auth.password})
          });
          const Data=await response.json();
          if(Data.success){
            localStorage.setItem("token",Data.token)
            navigate("/")
          }else{
            alert("Invalid Credentials")
          }
        }



    return (
        <div className='bg-black drop-shadow-2xl flex-col bg-opacity-40 justify-center rounded-xl mt-32 h-fit p-5 w-fit text-white text-center m-auto'>
            <form>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type="email" name="email" placeholder='Email' onChange={handleChange}></input>
                </div>
                <div className='mr-1 ml-1 mt-4 '>
                    <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='password' name="password"  placeholder='Password' onChange={handleChange}></input>
                </div>
                <div>
                    <button className='mt-5 bg-slate-400 p-1 rounded-lg' onClick={handleClick}>Login</button>
                </div>
            </form>
            </div>
)}

export default Login2;