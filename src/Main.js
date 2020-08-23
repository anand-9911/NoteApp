import React from 'react';
import AddNotes from './components/notes/AddNotes';
import ShowNote from './components/notes/ShowNote';
import { Container, Col, Row } from 'react-bootstrap';

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <AddNotes />
          </Col>
          <Col>
            <ShowNote />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
