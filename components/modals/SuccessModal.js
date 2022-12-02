import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from 'next/router';
import styles from '../../styles/TakeSurvey.module.css'

export default function SuccessModal({submitAnswers}) {
  const [show, setShow] = useState(false);
  const router = useRouter()
  const handleClose = () => {
    setShow(false)
    // hardcoded
    router.push("/dashboard/user/1")
};
  const handleShow = (e) => {
    e.preventDefault()
    submitAnswers()
    setShow(true)
  }

  return (
    <>
      <button className={styles.submitSurveyBtn} onClick={handleShow}>
        Submit
      </button>

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
