import React, { useEffect, useState } from 'react';
import './frontpage.css';
import { useNavigate } from 'react-router-dom';
import { handleimagesport } from './handleAPI/handleapis';
import { handleproductinfo } from './handleAPI/handleapis';

const Frontpagecomponets = () => {
  const navigate = useNavigate();
  const [sportimage, setsportimage] = useState([]);
  const [getallproductinfo, setallproductinfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handleimagesport();
        const formattedData = result.getresult.map(({ name, link }) => ({ name, link }));
        setsportimage(formattedData);
      } catch (error) {
        console.error('Error fetching sport images:', error);
      }
    };

    const fetchproductdata = async () => {
      try {
        const result = await handleproductinfo();
        console.log("all product result", result);
        const formattedData = result.getresult.map(({ sportType, productImage }) => ({ sportType, productImage }));
        setallproductinfo(formattedData);
      } catch (error) {
        console.error('Error fetching product info:', error);
      }
    };

    fetchData();
    fetchproductdata();
  }, []);

  if (!sportimage || sportimage.length === 0) {
    return <div>Loading...</div>; // or some loading indicator
  }

  return (
    <div className='main-front-page-a'>
      <div className='main-slider-a'></div>

      <div className='main-box-a'>
        {sportimage.slice(0, 3).map(({ name, link }, index) => (
          <div className='block-a' key={index}>
            <img
              src={link}
              alt={`${name} Sport`}
              onClick={() => navigate(`/primesport/sporttype/${name}`)}
            />
          </div>
        ))}
      </div>

      <div className='main-box-a'>
        {sportimage.slice(3).map(({ name, link }, index) => (
          <div className='block-a' key={index}>
            <img
              src={link}
              alt={`${name} Sport`}
              onClick={() => navigate(`/primesport/sporttype/${name}`)}
            />
          </div>
        ))}
      </div>

      <div className='main-small-box-a'>
        <div className='small-box-row'>
          {getallproductinfo.map((item, index) => (
            <div className='small-box' key={index}>
              <img src={item.productImage} alt={`Product ${index + 1}`} 
                onClick={() => navigate(`/primesport/producttype/${item.sportType}`)}
              />
            </div>
          ))}
        </div>

        <div className='small-box-row'>
          {getallproductinfo.map((item, index) => (
            <div className='small-box' key={index}>
              <img src={item.productImage} alt={`Product ${index + 1}`} 
                onClick={() => navigate(`/primesport/producttype/${item.sportType}`)}
              />
            </div>
          ))}
        </div>

        <div className='small-box-row'>
          {getallproductinfo.map((item, index) => (
            <div className='small-box' key={index}>
              <img src={item.productImage} alt={`Product ${index + 1}`} 
                onClick={() => navigate(`/primesport/producttype/${item.sportType}`)}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Frontpagecomponets;
