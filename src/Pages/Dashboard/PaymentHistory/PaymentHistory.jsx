import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading, error } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            // Only fetch if user email exists
            if (!user?.email) return [];

            // Fixed: Changed /payment/ to /payments/ to match your backend
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    if (isLoading) return <div className="p-10 text-center">Loading payments...</div>;

    if (error) return <div className="p-10 text-red-500 text-center">Error loading payments</div>;

    return (
        <div className="p-8">
            <h2 className="text-3xl mb-4">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-orange-400 text-white">
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td className="font-bold text-green-600">${payment.price}</td>
                                    <td className="text-gray-500">{payment.transactionId}</td>
                                    <td>
                                        <span className="badge badge-secondary uppercase">
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {payments.length === 0 && (
                <p className="text-center mt-10 text-gray-500">No payment history found.</p>
            )}
        </div>
    );
};

export default PaymentHistory;