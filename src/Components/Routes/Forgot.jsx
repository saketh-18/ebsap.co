import React, { useState } from 'react'
import Topbar from '../Topbar';
import { useNavigate } from 'react-router-dom';


export default function Forgot() {
    const [email , setEmail] = useState('');
    const navigate = useNavigate();

    async function sendMail(){
        const res = await fetch("http://localhost:4000/forgot_password" , {
            method:'POST' ,
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ email}),
        });
        if(res.ok){
            navigate("/login");
        }
        else {
            console.log("Error sending password reset link")
        }
    }
  return (
    <div className='forgot-container w-full h-screen flex flex-col'>
        <Topbar/> 
        <div className='rounded-md w-1/3 h-1/2 flex log-in-box self-center mt-10 flex-col justify-center'>
            <p className='text-2xl font-semibold text-white w-1/2 self-center mb-5 '>Reset Your Password</p>
            <input className='self-center focus:outline-none w-1/2 rounded-md p-2 mb-5' placeholder='Enter your Email id' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <button className='p-2 self-center w-1/2 bg-sky-500 rounded-md' onClick={sendMail}>Submit</button>
        </div>
    </div>
  )
}
