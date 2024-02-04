import React from 'react';
import './frontpage.css';
import { useNavigate } from 'react-router-dom';

const Frontpagecomponets = () => {
  const navigate = useNavigate();
  const sports = [
    { name: 'cricket', link: 'https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaWNrZXQlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'football', link: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D' },
    { name: 'hockey', link: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9ja2V5fGVufDB8fDB8fHww' },
    { name: 'baseball', link: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'volleyball', link: 'https://media.istockphoto.com/id/481671830/photo/friends-playing-volleyball.webp?b=1&s=170667a&w=0&k=20&c=-uZVDv6gjQaK8KDv2O-PltiKNJa_nPJlYviGog-8F_o=' },
    { name: 'chess', link: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc3N8ZW58MHx8MHx8fDA%3D' },
  ];

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
        {sports.slice(0, 3).map(({ name, link }, index) => (
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
        {sports.slice(3).map(({ name, link }, index) => (
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
              <img src={item.ball} alt={`Cricket Ball ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className='small-box-row'>
          {footballitems.map(({ name, link }, index) => (
            <div className='small-box' key={index}>
              <img
                src={link}
                alt={`${name} Item`}
                onClick={() => navigate(`primesport/sporttype/${name}`)}
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
