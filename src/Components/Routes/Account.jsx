import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar';

export default function Account() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
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
      setError(error.message); // Set error state
    }); 
  }, []);

  return (
    <>
      <Topbar />
      {error ? (
        <div className='text-red-500 text-2xl text-center'>{error}</div>
      ) : (
        <div className='text-sky-500 text-2xl text-center'>{username} hello!!</div>
      )}
    </>
  );
}
