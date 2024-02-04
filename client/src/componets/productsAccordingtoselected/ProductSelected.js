import React from 'react';
import './products.css';

const ProductSelected = () => {
  // Dummy product data for demonstration
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    caption: `Product ${index + 1} Caption`,
  }));

  return (
    <div className='main-product-lista-a'>
      <div className='main-price-selection'>
          <h1>sort by price</h1>
          <label> Greater than 1000<input type='checkbox'/></label>
          <label> Greater than 700<input type='checkbox'/></label>
          <label> Greater than 800<input type='checkbox'/></label>
          <label> Greater than 500<input type='checkbox'/></label>

          <h1>sort by brand</h1>
          <label> Addidas<input type='checkbox'/></label>
          <label> Nick<input type='checkbox'/></label>
          <label> Puma<input type='checkbox'/></label>
          <label> Jorden<input type='checkbox'/></label>

          <button>submit</button>
      </div>

      <div className='main-product-list-a'>
        {products.map((product) => (
          <div key={product.id} className='product-blocks-a'>
            <div className='image-a'>
              {/* Add your image content or component here */}
            </div>
            <div className='caption-a'>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelected;
