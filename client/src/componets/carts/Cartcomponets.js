import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import './cart.css';
import { handlegetcartsData } from '../handleAPI/handleapis';

const Cartcomponets = () => {
  const [cartsData, setCartsdata] = useState([]);

  useEffect(() => {
    const getcartsdata = async () => {
      try {
        const response = await handlegetcartsData({ email: 'aniket@gmail.com' });
        console.log(response);
        // Access the array of data using response.data
        setCartsdata(response.data);

        const extractedData = cartsData.map(item => ({
          name: item.name,
          price: item.price,
          productId: item.productId
        }));

        console.log(extractedData);

        if (!response.data || response.data.length === 0) {
          console.log("empty response");
        } else {
          console.warn(response.data);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    getcartsdata();
  }, []);

  const handleRemove = (productId) => {
    // Implement logic to remove the product from the cart based on productId
    console.log('Remove product with ID:', productId);
  };

  return (
    <div className='main-cart-a'>
      <h1>
        <FaShoppingCart /> Product added to carts
      </h1>
      {Array.isArray(cartsData) && cartsData.length > 0 ? (
        cartsData.map((product) => (
          <div key={product._id} className='cart-data'>
            <h1>{product.name}</h1>
            <div className='cart-button-a'>
              <h1>${product.price}</h1>
              <button onClick={() => handleRemove(product.productId)}>
                Remove <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products in the cart</p>
      )}
    </div>
  );
};

export default Cartcomponets;
