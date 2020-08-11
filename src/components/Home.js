import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ isAuth }) => {
  if (isAuth) return <Redirect to='/about' />;
  return <>Home works</>;
};

Home.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});
export default connect(mapStateToProps)(Home);
