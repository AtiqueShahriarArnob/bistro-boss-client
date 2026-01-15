import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UseCart from "../../../Hooks/UseCart";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();
    const [cart, refetch] = UseCart(); // Added refetch to clear cart UI later
    const [transactionId, setTransactionId] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !clientSecret) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error: methodError } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (methodError) {
            setError(methodError.message);
            return;
        }

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            });

        if (confirmError) {
            setError(confirmError.message);
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // UTC date
                    cartId: cart.map(item => item._id),
                    menuItemId: cart.map(item => item.menuId),
                    status: 'pending'
                };

                // FIX: Changed '/payments' to '/payment' to match your Backend Route
                const res = await axiosSecure.post('/payment', payment);

                if (res.data?.paymentResult?.insertedId) {
                    refetch(); // Clear the cart icon/count
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Payment Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory');
                }
            }
            setError('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    hidePostalCode: true,
                    style: {
                        base: {
                            fontSize: '18px',
                            color: '#32325d',
                            '::placeholder': { color: '#aab7c4' },
                        },
                        invalid: { color: '#fa755a' },
                    },
                }}
            />

            <button
                className="bg-orange-500 p-3 text-white rounded-xl mt-4 w-full disabled:bg-gray-400"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay Now
            </button>

            {error && <p className="text-red-600 mt-2">{error}</p>}
            {transactionId && (
                <p className="text-green-600 mt-2">
                    Your Transaction Id: <strong>{transactionId}</strong>
                </p>
            )}
        </form>
    );
};

export default PaymentForm;