import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = (props) => {
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
    console.log(formData);
  };

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

Login.propTypes = {};

export default Login;
