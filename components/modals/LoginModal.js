import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/Navbar.module.css'
import Checkbox from '../form-components/RadioForm';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={styles.navButton} onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are you a company that will be administering a surveys, or a user taking the survey?</Modal.Body>
        <Modal.Footer>
          <Checkbox />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;