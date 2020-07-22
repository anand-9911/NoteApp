import React from 'react';
import './App.css';
import AddNotes from './components/notes/AddNotes';
import EditNote from './components/notes/EditNote';
import ShowNote from './components/notes/ShowNote';
import CalendarComponent from './components/CalendarComponent';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const App = ({ isDateClicked }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <CalendarComponent />
          </Col>
          <Col>
            <ShowNote />
          </Col>
        </Row>
        <Row>
          <Col>{isDateClicked && <AddNotes />}</Col>
          <Col>
            <EditNote />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isDateClicked: state.notesReducer.isDateClicked,
});

export default connect(mapStateToProps)(App);
