import { FaShoppingCart, FaStar, FaWallet, FaCalendarAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`);
            return res.data;
        },
    });

    const { data: reservations = [] } = useQuery({
        queryKey: ["reservations", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get("/reservations");
            return res.data;
        },
    });

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">Hi, Welcome Back</h2>
            <p className="text-gray-500 mb-6">{user?.displayName || "User"} Dashboard</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-xl shadow">
                    <div className="flex items-center gap-4">
                        <FaShoppingCart className="text-4xl" />
                        <div>
                            <p className="text-sm">Your Cart</p>
                            <h3 className="text-3xl font-bold">{cart.length}</h3>
                        </div>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 rounded-xl shadow">
                    <div className="flex items-center gap-4">
                        <FaWallet className="text-4xl" />
                        <div>
                            <p className="text-sm">Total Payment</p>
                            <h3 className="text-3xl font-bold">$0</h3>
                        </div>
                    </div>
                </div>

                {reservations.length > 0 && (
                    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow">
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-4xl" />
                            <div>
                                <p className="text-sm">Reservations</p>
                                <h3 className="text-3xl font-bold">{reservations.length}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-base-200 p-6 rounded-xl shadow flex flex-col md:flex-row items-center gap-6 mb-10">
                <img
                    src={user?.photoURL || "https://i.ibb.co/2FsfXqM/avatar.png"}
                    alt="user"
                    className="w-32 h-32 rounded-full border-4 border-orange-400"
                />
                <div>
                    <h3 className="text-2xl font-semibold">{user?.displayName || "Anonymous User"}</h3>
                    <p className="text-gray-500">{user?.email}</p>
                    <p className="mt-2 text-sm">
                        Welcome to Bistro Boss
                        <br />
                        Manage your orders, view your cart, and enjoy delicious food!
                    </p>
                </div>
            </div>

            {reservations.length > 0 && (
                <div className="overflow-x-auto">
                    <h3 className="text-3xl  text-orange-500 mb-4">Your Reservations</h3>
                    <table className="table w-full border border-gray-200 rounded-lg">
                        <thead className="bg-orange-400 text-white">
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((resv) => (
                                <tr key={resv._id} className="hover:bg-orange-100">
                                    <td>{resv.name}</td>
                                    <td>{resv.date}</td>
                                    <td>{resv.time}</td>
                                    <td>{resv.guests}</td>
                                    <td>{resv.notes || "-"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserHome;
