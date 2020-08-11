import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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

        <button type='submit' className='btn btn-primary'>
          Login
        </button>
        <div>
          If not registered <Link to='/register'>click here</Link>
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
