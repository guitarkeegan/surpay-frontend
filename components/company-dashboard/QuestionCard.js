import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import {useState} from "react"
import {v4 as uuid4} from "uuid"


export default function QuestionCard() {

    const [card, setCard] = useState({

        question : "",
        answers: {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
          }
      })

    function handleChange(event){
        const {name, value} = event.target
        console.log(value, name)
    }

    return (
        <Form className={styles.questionCard}>
            <Row className="justify-content-center">
                <Col sm md={10}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Question"
                            size="lg"
                            name="question"
                            onChange={handleChange}
                            value={card.question}
                            
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 1"
                            size="lg"
                            name="option1"
                            onChange={handleChange}
                            value={card}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 2"
                            size="lg"
                            name="option2"
                            onChange={handleChange}
                            value={card}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 3"
                            size="lg"
                            name="option3"
                            onChange={handleChange}
                            value={card}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 4"
                            size="lg"
                            name="option4"
                            onChange={handleChange}
                            value={card}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-between">
                <Col sm md={2} className={styles.addQuestionButton} >
                    <Button variant="light" type="submit">
                        +
                    </Button>
                </Col>
                <Col sm md={2} className={styles.addQuestionButton} >
                    <Button variant="light" type="submit">
                        X
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
