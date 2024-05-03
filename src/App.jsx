import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Routes/Homepage';
import Account from './Components/Routes/Account';
import Login from './Components/Routes/Login';
import Forgot from './Components/Routes/Forgot';
import Payment from './Components/Routes/Payment';
import Bill from './Components/Routes/Bill';
import Welcome from './Components/Routes/Welcome';
import Banner from './Components/Banner';
import Calculate from './Components/Routes/Calculate';

export default function App(){
  return (
  <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/account' element={<Account />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/forgot' element={<Forgot />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/bill' element={<Bill />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/register' element={<Banner />} />
      <Route path='/calculate' element={<Calculate />} />
      </Routes>
    </BrowserRouter>
  </> 
  );
}