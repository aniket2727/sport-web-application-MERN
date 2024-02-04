// Typeofsports.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Typeofsports = () => {
  const { type } = useParams();
  console.log('Type:', type);

 return(
    <div>
        <h1>{type} </h1>
    </div>
 )
};

export default Typeofsports;
