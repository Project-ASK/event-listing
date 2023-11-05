import Link from 'next/link';
import '../styles/global.css'

export default function Login() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
        <h1 style={{ fontSize: "3em" }}>Event<span style={{ color: "red" }}> Lister</span></h1>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "65vh" }}>
        <div style={{ backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "20%", padding: "1.5%", borderRadius: "15px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ marginBottom: '45px' }}>Login</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <input type="text" placeholder="Username" style={{ padding: '10px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="password" placeholder="Password" style={{ padding: '10px' }} />
            </div>
            <div>
              <input type="submit" value="Log In" style={{ width: '60%', padding: '10px', marginLeft: "20%",borderRadius: "10px" }} />
            </div>
            <p>Not Registered? <Link href="./SignUp">Sign Up</Link></p>
          </form>
        </div>
      </nav>
    </>
  );
}
