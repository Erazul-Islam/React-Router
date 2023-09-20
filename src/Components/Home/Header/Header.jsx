import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <nav className="mr-12">
                <Link to="/">Home </Link>
                <Link to="/about">About</Link>
                <NavLink to="/users" >Users</NavLink>
                {/* <Link to="/users">Users</Link> */}
                <Link to='/posts'>Posts</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;