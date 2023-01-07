// import { abi, contractAddresses } from "../../constants"
// import { useMoralis, useWeb3Contract } from "react-moralis"
// import { ethers } from "ethers"
// import { useNotification } from "web3uikit"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from 'next/router';
import styles from '../../styles/TakeSurvey.module.css'
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function SuccessModal({submitAnswers}) {

  const { data, error } = useSWR("/api/account/user", fetcher)

    let userId;
    if (data){
      console.log(data)
      userId = data.user.id
    }

  const [show, setShow] = useState(false);

  const router = useRouter()

  const handleClose = () => {
    setShow(false)
    router.push(`/dashboard/user/${userId}}`)
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
        <Modal.Body>🎉🎉🎉You&apos;ve submitted a survey!🎉🎉🎉</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Back to dashboard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
