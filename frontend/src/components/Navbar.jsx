import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo'></img>
        </div>
        <div className='links'>
          <Link className='link' to='/'>
            <span>Login</span>
          </Link>
          <Link className='link' to='/'>
            <span>Register</span>
          </Link>
          <span>Parth</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
