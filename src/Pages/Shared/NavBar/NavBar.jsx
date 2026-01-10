import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white shadow-sm px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/order">Order Food</Link></li>
                        {!user && <li><Link to="/login">Log In</Link></li>}
                        {!user && <li><Link to="/signup">Sign Up</Link></li>}
                        {user && (
                            <li>
                                <button onClick={handleLogOut} className="w-full text-left">
                                    Sign Out
                                </button>
                            </li>
                        )}
                        <li><Link to="/secret">Secret</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl">Bistro Boss</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Our Menu</Link></li>
                    <li><Link to="/order">Order Food</Link></li>
                    {!user && <li><Link to="/login">Log In</Link></li>}
                    {!user && <li><Link to="/signup">Sign Up</Link></li>}
                    {user && (
                        <li>
                            <button onClick={handleLogOut} className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700">
                                Sign Out
                            </button>
                        </li>
                    )}
                    <li><Link to="/secret">Secret</Link></li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex">
                {user && (
                    <span className="mr-4 font-semibold">
                        Hello, {user.displayName ? user.displayName : user.email}
                    </span>
                )}
            </div>
        </div>
    );
};

export default NavBar;
