import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/AccountLoginModal.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
// import userLoginImg from '/assets/img/UserLoginImg-2.png'
import Form from 'react-bootstrap/Form'
// import distLoginImg from "/assets/img/DistLoginImg-2.png"
import { useRouter } from 'next/router';

export default function AccountLogin({loginType, updateUi}) {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [error, setError] = useState("")

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const toDashboard = async (event) =>{
    event.preventDefault()
    
    try {
      const res = await fetch("/api/login/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({address: address,
          password: userPassword})
      })
      if (res.status === 400){
        setError("Username or password was incorrect")

      } else {
        console.log(res)
        const {userId} = await res.json()
        setShow(false)
        updateUi(true)
        router.push(`/dashboard/${event.target.name}/${userId}`)
      }


  } catch (err) {
    console.log(err)
    setError("Username or password was incorrect")
  }
  }

  const toCompanyDashboard = async (e) => {
    e.preventDefault()
    
    try {
      const res = await fetch("/api/login/distributor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: companyEmail,
          password: companyPassword
        })
      })
      if (res.status === 400){
        setError("Username or password was incorrect")

      } else {
        console.log(res)
        setShow(false)
        const {id} = await res.json()
        updateUi(true)
        router.push(`/dashboard/distributor/${id}`)
      }
    

  } catch (err) {
    
    console.log(err)
  }
  }


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
      <Form.Text style={{color: "red"}}>{error}</Form.Text>
        <Form.Text className='text-muted'>try: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 or </Form.Text>
        <Form.Text className='text-muted'></Form.Text>
        <Form.Text className='text-muted'> 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E </Form.Text>
        <Form.Control onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Wallet Address" />
        <Form.Text className="text-muted">
          So we can send you crypto!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Text className='muted'>use: password123</Form.Text>
        <Form.Control onChange={(e)=>setUserPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>

      <Button name="user" onClick={toDashboard} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
       
 

        </Col>
        <Col className={styles.imageCol}>
        <Image
        className={styles.userLoginImg}
        src="/assets/img/UserLoginImg-2.png"
        alt={"Image of laptop on a desk"}
        height={400}
        width={570}
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
      <Form.Text style={{color: "red"}}>{error}</Form.Text>
      <Form.Text className='text-muted'>use: chain@link.io </Form.Text>
        <Form.Control onChange={(e)=>setCompanyEmail(e.target.value)} type="email" placeholder="Company Email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Text className='muted'>use: password123</Form.Text>
        <Form.Control onChange={(e)=>setCompanyPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>

      <Button name="distributer" onClick={toCompanyDashboard} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
       
        </Col>
        <Col className={styles.imageCol}>
        <Image
        className={styles.userLoginImg}
        src="/assets/img/DistLoginImg-2.png"
        alt={"Image of person holding a tablet"}
        height={400}
        width={570}
        />
        </Col>
        </Row>
        </Container>
      </Modal>
      
      }
    </>
  );
}

