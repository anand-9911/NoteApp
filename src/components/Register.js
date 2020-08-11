import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import { setAlert } from '../actions/alert';

const Register = ({ register, setAlert, isAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password1: '',
  });

  const { name, email, password, password1 } = formData;

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password === password1) register(formData);
    else setAlert("Passwords don't match", 'danger');
  };
  if (isAuth) return <Redirect to='/about' />;
  return (
    <>
      <div className='register-cover'>
        <div className='content'>
          <h3>
            Register:- <h5>To access the premium features</h5>
          </h3>
        </div>
      </div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={name}
            onChange={(e) => onInputChange(e)}
            placeholder='Enter Your Name'
            required
            aria-describedby='emailHelp'
          />
        </div>
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={(e) => onInputChange(e)}
            placeholder='Enter your Email Id'
            required
            aria-describedby='emailHelp'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            onChange={(e) => onInputChange(e)}
            placeholder='Enter your Password(min 6 characters)'
            required
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            name='password1'
            value={password1}
            onChange={(e) => onInputChange(e)}
            placeholder='Re-enter the password'
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Register
        </button>
        <div>
          If already registered <Link to='/login'>click here</Link>
        </div>
      </form>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});
export default connect(mapStateToProps, { register, setAlert })(Register);
