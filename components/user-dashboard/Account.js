import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import {v4 as uuid4} from "uuid"

export default function UserAccount() {
  return (
    
    <Form>
    <Row className={"text-center mb-3"}>
    <h2>Account Settings</h2>
    </Row>
<Row className='justify-content-center'>
<Col sm md={10}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control className={styles.inputFields} type="password" placeholder="Password" size='lg' />
      </Form.Group>
</Col>
      </Row>
      <Row className='justify-content-center'>
<Col sm md={10}>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Wallet</Form.Label>
        <Form.Control className={styles.inputFields} type="text-muted" placeholder="address" size='lg' />
      </Form.Group>
</Col>
      </Row>
      <Row className='justify-content-center text-center mt-3'>
<Col>
      <Button variant="primary" type="submit">
        Submit
      </Button>
</Col>
      </Row>
    </Form>
  );
}
