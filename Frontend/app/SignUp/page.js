import Link from 'next/link';
import '../styles/global.css'

export default function SignUp() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
                <h1 style={{ fontSize: "3em" }}>Event<span style={{ color: "red" }}> Lister</span></h1>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "65vh" }}>
                <div style={{ backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", padding: "1.5%", borderRadius: "1em", boxShadow: "0 0 1.5em rgba(0,0,0,0.1)" }}>
                    <h2 style={{ marginBottom: '8%' }}>Sign Up</h2>
                    <form>
                        <div style={{ marginBottom: '1em' }}>
                            <input type="text" placeholder="Username" style={{ padding: '10px' }} />
                        </div>
                        <div style={{ marginBottom: '1.6em' }}>
                            <input type="password" placeholder="Password" style={{ padding: '10px' }} />
                        </div>
                        <div>
                            <input type="submit" value="Sign Up" style={{ width: '60%', padding: '0.9em', marginLeft: "20%", borderRadius: "0.9em" }} />
                        </div>
                        <p>Already Registered? <Link href="/Login">Log In</Link></p>
                    </form>
                </div>
            </nav>
        </>
    );
}
