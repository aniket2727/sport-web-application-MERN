import React from 'react';
import './products.css';
import { useNavigate } from 'react-router-dom';

const ProductSelected = () => {

  // Dummy product data for demonstration
  const navigate=useNavigate();
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
        {products.map((product,index) => (
          <div key={product.id} className='product-blocks-a'onClick={()=>navigate(`/primesport/productbuy/${index}`)}>
            <div className='image-a'>
          
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
