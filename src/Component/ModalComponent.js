import { Modal, Button } from 'react-bootstrap';
import React, { useState } from "react";
import { useHistory } from 'react-router';

export default function ModalFn() {
  const history = useHistory();
  //For open modal
  const [show, setShow] = useState(true);
  //For close modal
  const handleClose = () => {
    setShow(false)
    history.push("/card");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank You for Shopping</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}