import React, { useState, useEffect } from 'react';
import './products.css';
import { useNavigate, useParams } from 'react-router-dom';
import { handleproductinfo } from '../handleAPI/handleapis';

const ProductSelected = () => {
  const navigate = useNavigate();
  const [getallproductinfo, setallproductinfo] = useState([]);
  const { producttype } = useParams();
  console.log("data of params", producttype);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handleproductinfo();
        const data = await response.getresult;
        setallproductinfo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main-product-lista-a'>
      <div className='main-price-selection'>
        <h1>Sort by price</h1>
        <label>
          Greater than 1000
          <input type='checkbox' />
        </label>
        <label>
          Greater than 700
          <input type='checkbox' />
        </label>
        {/* Add more checkboxes as needed for different price ranges */}

        <h1>Sort by brand</h1>
        <label>
          Adidas
          <input type='checkbox' />
        </label>
        <label>
          Nike
          <input type='checkbox' />
        </label>
        {/* Add more checkboxes for different brands if necessary */}

        <button>Submit</button>
      </div>

      <div className='main-product-list-a'>
        {getallproductinfo.map((item, index) => (
          <div key={item._id} className='product-blocks-a' onClick={() => navigate(`/primesport/productbuy/${item._id}`)}>
            <div className='image-a'>
              {/* You can add an image here based on item */}
            </div>
            <div className='caption-a'>
              <h2>{item.idNumber}</h2>
              <p>{item.price}</p>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelected;
