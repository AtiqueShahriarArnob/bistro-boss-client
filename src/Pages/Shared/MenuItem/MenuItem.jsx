import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className='flex space-x-4 mb-5'>
            <img style={{ borderRadius: '0 200px 200px 200px ' }} className='w-[100px]' src={image}>
            </img>
            <div>
                <p className='uppercase font-semibold'>{name}---------</p>
                <p>{recipe}</p>

            </div>
            <p className='text-yellow-600'>{price}</p>

        </div>
    );
};

export default MenuItem;