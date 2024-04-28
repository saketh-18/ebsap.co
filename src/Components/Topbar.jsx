import React from 'react'
import { useNavigate , Link } from 'react-router-dom'

export default function Topbar() {
  const navigate = useNavigate();

  function homeNav(){
    navigate("/");
  }

  return (
    <div className='bg-black w-full h-20 flex justify-between'>
       <img src='../../images/logo.png' className="h-4/5 w-20 self-center" onClick={homeNav}/>
       <div className='flex w-1/3 self-center justify-between mr-4'>
        <Link to="/payment" className='text-lg text-white font-semibold nav-elements'>Pay Bill</Link>
        <p className='text-lg text-white font-semibold nav-elements'>Service</p>
        <p className='text-lg text-white font-semibold nav-elements'>Account</p>
       </div>
    </div>
  )
}
