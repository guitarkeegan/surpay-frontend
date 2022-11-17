import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import QuestionCard from './QuestionCard';
import {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import CreateSurveyLogic from '../CreateSurveyLogic';
import {v4 as uuid4} from "uuid"

export default function NewSurvey(){

  const [surveyDetails, setSurveyDetails] = useState({
    surveyTitle: "",
    numOfTakers: "",
    fundingAmount: ""
  })


  const [cards, setCards] = useState([])

  useEffect(()=>{
    try{
    localStorage.setItem("surveyData", JSON.stringify(cards))
    } catch (err){
      console.log(err)
    }
  }, [cards])

  useEffect(()=>{
    try{
    localStorage.setItem("surveyHeader", JSON.stringify(surveyDetails))
    } catch (err){
      console.log(err)
    }
  }, [cards])

    function createNewCard(newCard){
      setCards(prev=>{
        return [...prev, newCard]
      })
    }

    function handleChange(event){
      event.preventDefault()
      const {name, value} = event.target
      console.log(surveyDetails)
      setSurveyDetails(prev=>{
        return {...prev, [name]: value}
      })
    }

    // function saveCard(){

    // }

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
        <Form.Control value={surveyDetails.surveyTitle} onChange={handleChange} name={"surveyTitle"} className={styles.inputFields} type="text" placeholder="" size='lg' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
</Row>

<Row className='justify-content-between'>
    <Col sm md={4} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control value={surveyDetails.numOfTakers} onChange={handleChange} name={"numOfTakers"} className={styles.inputFields} type="text" placeholder="Number of survey takers" size='lg' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      <Col sm md={4} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Funding Amount</Form.Label>
        <Form.Control value={surveyDetails.fundingAmount} onChange={handleChange} name={"fundingAmount"} className={styles.inputFields} type="text" placeholder="" size='lg' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
</Row>
    </Form>

    
    <QuestionCard addCard={createNewCard} />
   {cards.map(card=>{
      return (<QuestionCard 
        key={uuid4()}
        question={card.question}
        option1={card.option1}
        option2={card.option2}
        option3={card.option3}
        option4={card.option4}
        addCard={createNewCard} />
      )})}
      { parseFloat(surveyDetails.fundingAmount) > 0 ?
      <Container className="d-flex justify-content-center mt-5">
      <CreateSurveyLogic />
      </Container>
       :
      <></>
      }
    </>

    )
}