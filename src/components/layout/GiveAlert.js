import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const GiveAlert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} variant={`${alert.alertType}`}>
      {alert.mgs}
    </Alert>
  ));

  GiveAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ alerts: state.alertReducer });

export default connect(mapStateToProps)(GiveAlert);
