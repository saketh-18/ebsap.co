import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Topbar from '../Topbar';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [option, setOption] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      await axios.post('http://localhost:4000/save_payment', { amount, option }); 
      console.log('Payment details sent to backend');
    } catch (error) {
      console.error('Error sending payment details:', error);
    }
  };

  return (
    <>
    <Topbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Electricity Bill Payment</h1>
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
              Bill Amount
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" 
              type="number" 
              placeholder="Enter Bill Amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-password">
              Payment Option
            </label>
            <div className="relative">
              <select 
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" 
                onChange={(e) => setOption(e.target.value)}
                value={option}
              >
                <option value="">Select Payment Option</option>
                <option value="credit_debit">Credit/Debit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="digital_wallet">Digital Wallet</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit"
        >
          Pay Now
        </button>
      </form>
      <div className="flex mt-8 space-x-4">
        <img src="card.svg" alt="Credit/Debit Card" />
        <img src="bank_transfer.svg" alt="Bank Transfer" />
        <img src="digital_wallet.svg" alt="Digital Wallet" />
      </div>
    </div>
    </>
  );
};

export default Payment;
