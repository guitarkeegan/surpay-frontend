import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import QuestionCard from './QuestionCard';
import {useState} from "react"
import Container from 'react-bootstrap/Container';

export default function NewSurvey(){

  const [cards, setCards] = useState([])

    function createNewCard(newCard){
      setCards(prev=>{
        return [...prev, newCard]
      })
    }

    function saveCard(){

    }

    return (
      <>
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
    </Form>

    
    <QuestionCard addCard={createNewCard} />
   {cards.map(card=>{
      return (<QuestionCard 
        question={card.question}
        option1={card.option1}
        option2={card.option2}
        option3={card.option3}
        option4={card.option4}
        addCard={createNewCard} />
      )})}

      <Container className="d-flex justify-content-center mt-5">
      <Button className={styles.completeSurveyButton}>Complete Survey</Button>
      </Container>
    </>

    )
}