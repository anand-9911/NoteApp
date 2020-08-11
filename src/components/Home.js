import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import { checkHeader } from '../utils/utilityFunctions';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 6,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
        color: '#00000',
      },
    },
  },
};

const Home = ({ isAuth }) => {
  useEffect(() => {
    checkHeader();
  }, []);

  if (isAuth) return <Redirect to='/about' />;

  return (
    <>
      <Particles className='particle' params={particlesOptions} />
      <header className='cover'>
        <div className='content'>
          <h1>Welcome to Meet-Up</h1>
          <p>
            Login/Register to check your friend's schedule and then caught up
          </p>
          <div className='button'>
            <Link to='/login' className='btn btn-primary button-item'>
              LOGIN
            </Link>
            <Link to='/register' className='btn btn-secondary button-item '>
              REGISTER
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

Home.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});
export default connect(mapStateToProps)(Home);
