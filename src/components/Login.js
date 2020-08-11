import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { checkHeader } from '../utils/utilityFunctions';

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  useEffect(() => {
    checkHeader();
  }, []);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  if (isAuth) return <Redirect to='/about' />;
  return (
    <>
      <div className='login-cover'>
        <div className='content'>
          <h3>
            LOGIN:- <h5>To check on your friends</h5>
          </h3>
        </div>
      </div>

      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={(e) => onInputChange(e)}
            placeholder='Enter your registered email-id'
            required
            aria-describedby='emailHelp'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            onChange={(e) => onInputChange(e)}
            placeholder='Enter your password'
            required
          />
        </div>

        <button type='submit' className='btn btn-success'>
          LOGIN
        </button>
        <div>
          If not registered{' '}
          <Link to='/register' className='btn btn-outline-primary'>
            click here
          </Link>
        </div>
      </form>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
