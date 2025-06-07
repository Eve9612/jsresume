import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            background: 'blue',
            color: 'white',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div style={{fontWeight: 'bold' }}>MyApp</div>
            <div>
                <Link to="/ecom" style={{ marginRight: '15px', color: 'white' }}>Ecom</Link>
                <Link to="/feature" style={{ marginRight: '15px', color: 'white' }}>Feature</Link>
                <Link to="/resume" style={{ marginRight: '15px', color: 'white' }}>Resume</Link>
                <Link to="/login" style={{ color: 'white' }}>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;