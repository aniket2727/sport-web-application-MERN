import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../../features/userSlice';
import { FaUser, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
import './navbar.css';

const Navbarcomponets = () => {
  const dispatch=useDispatch()
  var userEmail = useSelector((state) => state.user.email);
  userEmail="aniket"
  
  const handleLogout = () => {
    dispatch(logoutUser());
    console.log('logout is called');
  };


  return (
    <div className='main-navbar-a'>
      <div className='sub-navbar-a'>
        <div className='navbar-logo-a'>
          <h1>Prime Sports</h1>
        </div>

        <div className='navbar-input-a'>
          <input />
        </div>

        <div className='navbar-login-status-a'>
          {
            userEmail ? (
              <button className='logout-btn' onClick={handleLogout}>
                <FaUser />
                Logout
              </button>
            ) : (
              <button className='login-btn'>
                <FaUser />
                Login
              </button>
            )
          }
        </div>

        <div className='navbar-cart-shop-a'>
          <button className='cart-btn'>
            <FaShoppingCart />
            Cart
          </button>
          <button className='shop-btn'>
            <FaShoppingBag />
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbarcomponets;
