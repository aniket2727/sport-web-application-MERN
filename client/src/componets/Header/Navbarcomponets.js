


import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const Navbarcomponets = () => {
    const userEmail = useSelector((state) => state.user.email);
  const userToken = useSelector((state) => state.user.token); // Add this line
  const dispatch = useDispatch();
  return (
    <div>
      <h1>name{userEmail}</h1>
    </div>
  )
}

export default Navbarcomponets
