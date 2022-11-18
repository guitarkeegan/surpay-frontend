import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from 'next/router'

export default function SuccessModal() {
  const [show, setShow] = useState(false);
  const router = useRouter()
  const handleClose = () => {
    setShow(false)
    router.push("/dashboard/user")
};
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>🎉🎉🎉You've submitted a survey!🎉🎉🎉</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Back to dashboard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
