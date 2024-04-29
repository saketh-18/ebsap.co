import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topbar from '../Topbar';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pCheck , setpCheck] = useState('');

  async function handleLogin() {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate("/payment");
      } else {
        console.log("Login failed");
        setpCheck("wrong Password");
        // Handle login failure
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <div className='w-full h-screen flex flex-col login-container'>
    <Topbar />  
    <div className="login-form flex flex-col w-1/3 justify-center h-1/2 log-in-box self-center mt-10 rounded-md">
    <p className='text-2xl text-white font-semibold self-center mb-4'>Login to EBSAP</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='mb-4 rounded-md focus:outline-none w-1/2 self-center p-2'
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-4 rounded-md focus:outline-none w-1/2 self-center p-2'
      />
      <button className='p-2 bg-sky-500 w-1/2 rounded-md self-center button' onClick={handleLogin}>Login</button>
      <p className='text-red-500 text-xl self-center font-semibold mt-3'>{pCheck}</p>
      <div className='flex w-1/2 self-center justify-between mt-3'>
        <Link to="/" className='underline'>Register Instead?</Link>
        <Link to="/forgot" className='underline' >Forgot Password?</Link>
      </div>
    </div>
    </div>
  );
}
