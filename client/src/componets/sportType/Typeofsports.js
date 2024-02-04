// Typeofsports.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './typesports.css';

const Typeofsports = () => {
  const { type } = useParams();
  console.log('Type:', type);

  // Dummy product data for demonstration
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    caption: `Product ${index + 1} Caption`,
    discount: `${(index + 1) * 5}%`,
    starCount: 5, // Number of stars
  }));

  return (
    <div className='main-product-list-a'>
      {products.map((product) => (
        <div key={product.id} className='product-a'>
          <div className='product-image'>
            <h1>image</h1>
          </div>

          <div className='product-caption-price-starts-discount'>
            <h2>{product.price}</h2>
            <h2>{product.caption}</h2>
            <h2>{product.discount}</h2>
            <div className='star-container'>
              {[...Array(product.starCount)].map((_, starIndex) => (
                <FaStar key={starIndex} style={{ color: 'yellow' }} />
              ))}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Typeofsports;
