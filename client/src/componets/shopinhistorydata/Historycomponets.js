import React from 'react';
import './shop.css';
import { useSelector } from 'react-redux';

const Historycomponets = () => {
    var userEmail = useSelector((state) => state.user.email);

    const cartProducts = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: `$${(index + 1) * 10}`,
    }));

  return (
    <div className='main-cart-a'>
      <h1>Shopping History of {userEmail }</h1>

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
