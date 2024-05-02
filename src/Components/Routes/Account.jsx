import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar'

export default function Account() {
  const [username , setUsername] = useState('');
  useEffect(() => {
    const res = () => {
  fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include", // Include cookies in the request
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => {
      console.log("User details:", data);
      setUsername(data.username);
      // Update UI with user details
  })
  .catch(error => {
      console.error("Error fetching user details:", error);
  }); 
} 
 res()
} , []);

  return (
    <>
    <Topbar />
    <div className='text-sky-500 text-2xl text-center' >{username} hello!!</div>
    </>
  )
}
