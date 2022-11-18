import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/AccountLoginModal.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import userLoginImg from '../../public/assets/img/UserLoginImg-2.png'
import Form from 'react-bootstrap/Form'
import distLoginImg from '../../public/assets/img/DistLoginImg-2.png'

export default function AccountLogin({loginType}) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    
      <Button variant="primary" onClick={handleShow}>
        Submit
      </Button>
      { loginType === "user" ?
      <Modal size={"xl"} show={show} onHide={handleClose}>
      <Container>
      <Row className="pb-0">
      <Modal.Header closeButton>
          <Modal.Title>Account Login</Modal.Title>
        </Modal.Header>
      <Col className='d-flex align-items-center'>
        
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Wallet Address" />
        <Form.Text className="text-muted">
          So we can send you crypto!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
       
 

        </Col>
        <Col className='p-0'>
        <Image
        className={styles.userLoginImg}
        src={userLoginImg}
        alt={"Image of laptop on a desk"}
        />
        </Col>
        </Row>
        </Container>
      </Modal>
      :
      <Modal size={"xl"} show={show} onHide={handleClose}>
      <Container>
      <Row className="pb-0">
      <Modal.Header closeButton>
          <Modal.Title>Company Account Login</Modal.Title>
        </Modal.Header>
      <Col className='d-flex align-items-center'>
        
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Company Name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
       
        </Col>
        <Col className='p-0'>
        <Image
        className={styles.userLoginImg}
        src={distLoginImg}
        alt={"Image of person holding a tablet"}
        />
        </Col>
        </Row>
        </Container>
      </Modal>
      
      }
    </>
  );
}

