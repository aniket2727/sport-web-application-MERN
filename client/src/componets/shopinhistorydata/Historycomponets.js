import React from 'react';
import './shop.css';

const Historycomponets = () => {
    const cartProducts = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: `$${(index + 1) * 10}`,
    }));

  return (
    <div className='main-cart-a'>
      <h1>Shopping History</h1>

      {cartProducts.map((product) => (
        <div key={product.id} className='cart-data'>
          <h1>{product.name}</h1>
          <div className='cart-button-a'>
            <h1>{product.price}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Historycomponets;
