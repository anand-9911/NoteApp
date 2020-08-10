import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
const Navigation = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div>
          <Link className='navbar-brand' to='/home'>
            <img src={logo} alt='Meet-Up' id='logo' />
          </Link>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='navbar-brand' to='/home'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar-brand' to='/create-note'>
                Create Note
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar-brand' to='/friends'>
                Friends
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar-brand' to='/register'>
                Register
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar-brand' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <a className='navbar-brand'>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
