import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../../features/userSlice';
import { FaUser, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbarcomponets = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch()
  var userEmail = useSelector((state) => state.user.email);
  
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/primesport/login')
  };


  return (
    <div className='main-navbar-a'>
      <div className='sub-navbar-a'>
        <div className='navbar-logo-a'>
          <h1 onClick={()=>navigate('/primesport/productpagefirst')}>Prime Sports</h1>
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
              <button className='login-btn' onClick={()=>navigate('/primesport/login')}>
                <FaUser />
                Login
              </button>
            )
          }
        </div>

        <div className='navbar-cart-shop-a'>
          <button className='cart-btn' onClick={()=>navigate('/primesport/cart')}>
            <FaShoppingCart />
            Cart
          </button>
          <button className='shop-btn' onClick={()=>navigate('/primesport/shopinghistory')}>
            <FaShoppingBag />
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbarcomponets;
