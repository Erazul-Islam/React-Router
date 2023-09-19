import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <nav className="mr-12">
                <Link to="/">Home </Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;