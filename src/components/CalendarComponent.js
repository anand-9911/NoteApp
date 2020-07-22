import React from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onCalendarClick } from '../actions/notes';

const CalendarComponents = ({ onCalendarClick, date }) => {
  const onChange = (date) => {
    onCalendarClick(date);
  };
  return (
    <>
      <Calendar onClickDay={onChange} value={date} />
    </>
  );
};

CalendarComponents.propTypes = {
  date: PropTypes.string,
  onCalendarClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.notesReducer.date,
});

export default connect(mapStateToProps, { onCalendarClick })(
  CalendarComponents
);
