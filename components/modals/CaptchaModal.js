import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/Image'
import captcha from "../../public/assets/img/recaptchaExample.png"

export default function MockCaptchaModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);

}
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Captcha</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please solve this puzzle!
        <Image
        src={captcha} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

