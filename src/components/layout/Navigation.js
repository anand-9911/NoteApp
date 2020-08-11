import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navigation = ({ isAuth, logout }) => {
  const authLinks = () => (
    <>
      <li className='nav-item'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/create-note'>
          Add-Event
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/friends'>
          Friends
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' onClick={logout}>
          Logout
        </Link>
      </li>
    </>
  );

  const nonAuthLinks = () => (
    <>
      <li className='nav-item'>
        <Link className='nav-link' to='/home'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </>
  );

  return (
    <>
      <header className='navbar navbar-expand-lg navbar-light bg-light flex-column flex-md-row bd-navbar '>
        <Link className='navbar-brand mr-0 mr-md-2' to='/home'>
          <img
            src={logo}
            alt='Meet-Up'
            id='logo'
            width='70'
            height='50'
            loading='lazy'
            className='d-block align-top'
          />
        </Link>
        <div className='navbar-nav-scroll'>
          <ul className='navbar-nav bd-navbar-nav flex-row'>
            {isAuth ? authLinks() : nonAuthLinks()}
          </ul>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { logout })(Navigation);
