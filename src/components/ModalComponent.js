import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = ({ title, content, actions, onDismiss }) => {
  const onModalClick = (e) => {
    const modal = document.getElementById('modal-create');
    if (e.target == modal) {
      modal.style.display = 'none';
      document.location.reload(true);
    }
  };

  return ReactDOM.createPortal(
    <div id='modal-create' onClick={(e) => onModalClick(e)}>
      <Modal.Dialog>
        <div onClick={(e) => e.stopPropagation()}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{content}</p>
          </Modal.Body>

          <Modal.Footer>{actions}</Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>,
    document.getElementById('modal')
  );
};

export default ModalComponent;
