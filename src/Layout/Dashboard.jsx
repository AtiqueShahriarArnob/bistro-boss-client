import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";

const Dashboard = () => {
    const [isAdmin] = UseAdmin();

    return (
        <div className="flex min-h-screen">


            <div className="w-64 bg-orange-400 text-white">
                <ul className="menu p-4 space-y-2">

                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/adminHome"
                                        className="flex items-center gap-3"
                                    >
                                        <FaHome />
                                        <span>Admin Home</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/addItems"
                                        className="flex items-center gap-3"
                                    >
                                        <FaUtensils></FaUtensils>
                                        <span>Add Items</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/manageItems"
                                        className="flex items-center gap-3"
                                    >
                                        <FaList></FaList>
                                        <span>Manage Items</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/bookings"
                                        className="flex items-center gap-3"
                                    >
                                        <FaList />
                                        <span>Manage Bookings</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/users"
                                        className="flex items-center gap-3"
                                    >
                                        <FaUser></FaUser>
                                        <span>All Users</span>
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/cart"
                                        className="flex items-center gap-3"
                                    >
                                        <FaShoppingCart />
                                        <span>My Cart</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/userHome"
                                        className="flex items-center gap-3"
                                    >
                                        <FaHome />
                                        <span>User Home</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/reservation"
                                        className="flex items-center gap-3"
                                    >
                                        <FaCalendar />
                                        <span>Reservation</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/review"
                                        className="flex items-center gap-3"
                                    >
                                        <FaAd />
                                        <span>Review</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/bookings"
                                        className="flex items-center gap-3"
                                    >
                                        <FaList />
                                        <span>Bookings</span>
                                    </NavLink>
                                </li>
                            </>
                    }



                    <div className="divider text-white">OR</div>

                    <li>
                        <NavLink
                            to="/"
                            className="flex items-center gap-3"
                        >
                            <FaHome />
                            <span>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/order"
                            className="flex items-center gap-3"
                        >
                            <FaSearch />
                            <span>Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/order/contact"
                            className="flex items-center gap-3"
                        >
                            <FaEnvelope></FaEnvelope>
                            <span>Contact</span>
                        </NavLink>
                    </li>

                </ul>
            </div>


            <div className="flex-1 p-8 bg-gray-100">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;
