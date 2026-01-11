import React from 'react';
import UseCart from '../../../Hooks/UseCart';
import { FaTrashAlt, FaShoppingCart, FaHome, FaWallet } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f97316',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Item removed from cart.', 'success');
                        }
                    });
            }
        });
    };
    return (
        <div className="min-h-screen flex">



            <div className="flex-1 bg-gray-100 p-8">


                <div className="flex justify-between items-center bg-white p-5 rounded shadow mb-6">
                    <h2 className="font-semibold">Items: {cart.length}</h2>
                    <h2 className="font-semibold">Total: ${totalPrice}</h2>
                    <button className="btn btn-primary">Pay</button>
                </div>


                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cart.map((item, idx) => (
                                    <tr key={item._id}>
                                        <td>{idx + 1}</td>

                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </td>

                                        <td>{item.name}</td>
                                        <td>${item.price}</td>

                                        <td>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn btn-ghost text-red-600"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;
