import React from 'react';
import AddNotes from './components/notes/AddNotes';
import EditNote from './components/notes/EditNote';
import ShowNote from './components/notes/ShowNote';
import CalendarComponent from './components/CalendarComponent';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const Main = ({ isDateClicked }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <AddNotes />
          </Col>
          <Col>
            <div>ShowNote</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>EditNote</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isDateClicked: state.notesReducer.isDateClicked,
});

export default connect(mapStateToProps)(Main);
