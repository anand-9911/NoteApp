import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap'

const ModalComponent = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}>
    <div onClick={(e) => e.stopPropagation()}>
    <Modal.Dialog >
    <Modal.Header>
  <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
    {props.content}
    </Modal.Body>
  
    <Modal.Footer>
    {props.actions}
    </Modal.Footer>
  </Modal.Dialog>
  </div>
  </div>,
    document.getElementById('modal')
  );
};

export default ModalComponent;