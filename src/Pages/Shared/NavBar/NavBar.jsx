import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart();

    const handleLogOut = () => {
        logOut().catch(err => console.log(err));
    };

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-40 text-white px-4">

            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">Bistro Boss</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <Link to="dashboard/cart" className="relative">
                    <FaShoppingCart className="text-2xl" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 rounded-full">
                        {cart.length}
                    </span>
                </Link>

                {user && (
                    <span className="text-sm">{user.displayName || user.email}</span>
                )}

                {user ? (
                    <button onClick={handleLogOut} className="bg-red-600 px-3 py-1 rounded">
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="btn btn-sm">Login</Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
