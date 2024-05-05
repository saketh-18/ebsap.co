import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import Topbar from './Topbar';


export default function Banner() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    });

    if (res.ok) {
      navigate("/login");
    } else {
      // Handle errors if needed
      console.error("Registration failed:", res.statusText);
    }
  }

  return (
    <div className='w-full h-screen banner1'>
    <Topbar />
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-96 h-2/3 log-in-box  rounded-md flex flex-col justify-center items-center'>
        <div className='flex items-center'>
          <p className='text-3xl text-white font-semibold'>Register in </p>
          <p className='text-sky-500 text-3xl ml-2 font-semibold'>EBS AP</p>
        </div>
        <div className='jusify-between flex flex-col h-3/4 justify-center '>
          <input placeholder='username' value={username} onChange={(e) => { setUsername(e.target.value) }} type='text' required className='p-2 rounded-md focus:outline-none mb-3' />
          <input placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' required className='p-2 rounded-md focus:outline-none mb-3' />
          <button className='p-3 bg-sky-400 rounded-md' onClick={handleRegister}>Submit</button>
          <Link to={"/login"} className='underline text-white self-center hover:text-sky-500'>Login Instead?</Link>
        </div>
      </div>
    </div>
    </div>
  )
}



// {/* <div className='w-96 h-52 self-center mr-44 rounded-md flex justify-start items-start'>
//         <Carousel className="w-full h-full" /> {/* Adjusted dimensions */}
//       </div> */}