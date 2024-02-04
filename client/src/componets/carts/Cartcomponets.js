import React from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import './cart.css';

const Cartcomponets = () => {
    // Dummy data for demonstration
    const cartProducts = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: `$${(index + 1) * 10}`,
    }));

    return (
        <div className='main-cart-a'>
            <h1>
                <FaShoppingCart /> Product added to carts
            </h1>
            {cartProducts.map((product) => (
                <div key={product.id} className='cart-data'>
                    <h1>{product.name}</h1>
                    <div className='cart-button-a'>
                        <h1>{product.price}</h1>
                        <button>
                            Remove <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cartcomponets;
