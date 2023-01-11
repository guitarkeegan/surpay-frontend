import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import {useState} from "react"
import {v4 as uuid4} from "uuid"
import {MdOutlineLibraryAdd} from "react-icons/md"
import { IoTrashBinSharp } from "react-icons/io5"

export default function QuestionCard({addCard}) {

    const [card, setCard] = useState({
        question : "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
      })

    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        console.log(name, value)
        setCard(prev=>{
           return { ...prev,
            [name]: value}
        })

        console.log(card)
    }

    function handleSubmit(event){
        event.preventDefault()
        addCard(card)
        setCard({
            question : "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
          })
    }

    return (
        <Form className={styles.questionCard}>
            <Row className={styles.questionRow}>
                <Col sm md={10}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Question"
                            autoComplete="off"
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
                            autoComplete="off"
                            size="lg"
                            name="option1"
                            onChange={handleChange}
                            value={card.option1}
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
                            autoComplete="off"
                            size="lg"
                            name="option2"
                            onChange={handleChange}
                            value={card.option2}
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
                            autoComplete="off"
                            size="lg"
                            name="option3"
                            onChange={handleChange}
                            value={card.option3}
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
                            autoComplete="off"
                            size="lg"
                            name="option4"
                            onChange={handleChange}
                            value={card.option4}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className={styles.formButtonsWrapper}>
                <Col sm md={2} className={styles.addQuestionButton} >
                <div className={styles.addBtnWrapper} onClick={handleSubmit}>
                        <MdOutlineLibraryAdd />
                        </div>
                </Col>
                
            </Row>
        </Form>
    )
}
