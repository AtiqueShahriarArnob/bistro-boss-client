import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import UseCart from '../../Hooks/UseCart';

const FoodCard = ({ item }) => {
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = UseCart();

    const { name, image, price, recipe, _id } = item;

    const handleAddToCart = () => {
        if (!user) {
            alert("You must log in first!");
            navigate('/login', { state: { from: location } });
            return;
        }

        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
        };

        axiosSecure.post('/cart', cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Item added to cart!');
                    refetch(); // ✅ refetch after successful add
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="card bg-base-100 w-96 p-2 border-2 shadow-sm">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p className='bg-black text-white w-12 absolute -mt-0 ml-80 h-8 rounded-sm p-1'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="bg-black text-white px-6 py-3 rounded-lg"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
