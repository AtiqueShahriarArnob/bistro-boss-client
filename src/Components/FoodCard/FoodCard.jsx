import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="card bg-base-100 w-96 p-2 border-2 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-black text-white w-12 absolute -mt-0 ml-80 h-8 rounded-sm p-1'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="bg-black text-white px-6 py-3 rounded-lg">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;