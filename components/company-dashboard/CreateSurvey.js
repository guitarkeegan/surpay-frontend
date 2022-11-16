import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import QuestionCard from './QuestionCard';

export default function NewSurvey(){

    const inlineStyle = {
        takersDesired: {
            marginLeft: "40px"
        },
        amountToFund: {
            marginRight: "40px"
        }
    }

    return (
        <Form>
        <Row className={"text-center mb-3"}>
    <h2>Create a Survey</h2>
    </Row>

    <Row className='justify-content-center'>
    <Col sm md={10} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Survey Title</Form.Label>
        <Form.Control className={styles.inputFields} type="text" placeholder="" size='lg' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
</Row>

<Row className='justify-content-between'>
    <Col sm md={4} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control className={styles.inputFields} type="text" placeholder="Number of survey takers" size='lg' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col sm md={4} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Funding Amound</Form.Label>
        <Form.Control className={styles.inputFields} type="text" placeholder="" size='lg' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
</Row>

<QuestionCard />

<Row>
<Col className='text-center'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col>
      
      </Row>
    </Form>

    )
}