import React from 'react'
import { useNavigate , Link } from 'react-router-dom'

export default function Topbar() {
  const navigate = useNavigate();

  function homeNav(){
    navigate("/");
  }

  return (
    <div className='bg-black w-full h-20 flex justify-between'>
       <img src='../../images/logo.png' className="h-4/5 w-20 self-center cursor-pointer" onClick={homeNav}/>
       <div className='flex w-1/3 self-center justify-between mr-4'>
        <Link to="/payment" className='text-lg text-white font-semibold nav-elements'>Pay Bill</Link>
        <Link to="/calculate" className='text-lg text-white font-semibold nav-elements'>Calculate Cost</Link>
       </div>
    </div>
  )
}
