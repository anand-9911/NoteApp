import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { connect } from 'react-redux';

const Navigation = ({ isAuth }) => {
  const authLinks = () => (
    <>
      <li className='nav-item'>
        <Link className='navbar-brand' to='/about'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='navbar-brand' to='/create-note'>
          Add-Event
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='navbar-brand' to='/friends'>
          Friends
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='navbar-brand'>Logout</Link>
      </li>
    </>
  );

  const nonAuthLinks = () => (
    <>
      <li className='nav-item'>
        <Link className='navbar-brand' to='/home'>
          Home
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
    </>
  );

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'></li>
            <Link className='navbar-brand' to='/home'>
              <img src={logo} alt='Meet-Up' id='logo' />
            </Link>

            {isAuth ? authLinks() : nonAuthLinks()}
          </ul>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(Navigation);
