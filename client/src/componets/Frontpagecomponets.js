import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/userSlice';

const Frontpagecomponets = () => {
  const userEmail = useSelector((state) => state.user.email);
  const userToken = useSelector((state) => state.user.token); // Add this line
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action to clear user data in the state
    dispatch(logoutUser());
    console.log('logout is called');
  };

  return (
    <div>
      <p>Another Component User Email: {userEmail}</p>
      <p>User Token: {userToken}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Frontpagecomponets;
