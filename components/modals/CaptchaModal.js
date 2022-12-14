import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
// import captcha from "/assets/img/recaptchaExample.png"
import {useRouter} from "next/router"

export default function MockCaptchaModal({user, selectedSurveyId}) {
  const [show, setShow] = useState(false);

  const router = useRouter()

  const handleClose = () => {
    setShow(false);
    router.push(`/survey/take/${selectedSurveyId}`)
}
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Take me to the survey
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Captcha</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please solve this puzzle!
        <Image
        alt="mock captcha"
        src="/assets/img/recaptchaExample.png"
        height={600}
        width={400} />
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

