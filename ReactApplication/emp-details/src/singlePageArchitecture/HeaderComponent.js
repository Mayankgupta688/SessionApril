import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <>
            <h1>This is Header Component</h1>
            <nav>
                <Link to="/home" style={{marginRight: "10px"}}>Home</Link>
                <Link to="/home/sample" style={{marginRight: "10px"}}>Sample</Link>
                <Link to="/help" style={{marginRight: "10px"}}>Help</Link>
                <Link to="/about" style={{marginRight: "10px"}}>About</Link>
            </nav>
        </>
    )
}
