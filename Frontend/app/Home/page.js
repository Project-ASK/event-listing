'use client'
import '../styles/global.css';

const handleLogout = async () => {
  window.location.replace('Login');
}
const Page = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <h2 style={{ color: 'black', margin: '2px' }}>Event <span style={{color:"red"}}>Lister</span></h2>
      <button style={{ backgroundColor: 'rgb(249, 49, 49)', color: 'white', padding: '7px 25px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', marginRight: '2px', cursor: 'pointer',borderRadius:"20px" }} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Page;
