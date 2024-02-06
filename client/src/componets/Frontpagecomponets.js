import React, { useEffect, useState } from 'react';
import './frontpage.css';
import { useNavigate } from 'react-router-dom';
import { handleimagesport } from './handleAPI/handleapis';

const Frontpagecomponets = () => {
  const navigate = useNavigate();
  const [sportimage,setsportimage]=useState([])

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

    fetchData();
  }, []);

  if (!sportimage || sportimage.length === 0) {
    return <div>Loading...</div>; // or some loading indicator
  }

  const cricketitems = [
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
    { ball: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D" },
  ];

  const footballitems = [
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "football", link: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

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
          {cricketitems.map((item, index) => (
            <div className='small-box' key={index}>
              <img src={item.ball} alt={`Cricket Ball ${index + 1}`} 
              onClick={() => navigate(`/primesport/producttype/${'cricket'}`)}
              />
            </div>
          ))}
        </div>

        <div className='small-box-row'>
          {footballitems.map(({ name, link }, index) => (
            <div className='small-box' key={index}>
              <img
                src={link}
                alt={`${name} Item`}
              />
            </div>
          ))}
        </div>

        <div className='small-box-row'>
          {cricketitems.map((item, index) => (
            <div className='small-box' key={index}>
              <img src={item.ball} alt={`Cricket Ball ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontpagecomponets;
