'use client'
import { useState, useEffect } from 'react';
import '../styles/global.css';

const handleLogout = async () => {
  window.location.replace('Login');
}

const createEvent = async () => {
  router.push('CreateEvent');
}

const Page = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <h2 style={{ color: 'black', margin: '2px' }}>Event <span style={{ color: "red" }}>Lister</span></h2>
        <h3 style={{ color: 'black', margin: '2px' }}>Welcome, {username}!</h3>
        <button style={{ backgroundColor: 'rgb(249, 49, 49)', color: 'white', padding: '7px 25px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', marginRight: '2px', cursor: 'pointer', borderRadius: "20px" }} onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 115px)' }}>
        <h3>No Events to show</h3>
        <button onClick={createEvent}>+ Create New Event</button>
      </div>
    </>
  );
};

export default Page;
