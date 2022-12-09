import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"
import {v4 as uuid4} from "uuid"
import {MdOutlineLibraryAdd} from "react-icons/md"
import { IoTrashBinSharp } from "react-icons/io5"

export default function QuestionCardCreated(props) {

    return (
        <Form key={uuid4()} className={styles.questionCard}>
            <Row className="justify-content-center">
                <Col sm md={10}>
                    <Form.Group className="mb-3" controlId={uuid4()}>
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Question"
                            autoComplete="off"
                            size="lg"
                            disabled="true"
                            name="question"
                            value={props.question}
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
                            disabled="true"
                            name="option1"
                            value={props.option1}
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
                            disabled="true"
                            name="option2"
                            value={props.option2}
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
                            disabled="true"
                            name="option3"
                            value={props.option3}
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
                            disabled="true"
                            value={props.option4}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className={styles.formButtonsWrapper}>
                <Col sm md={2} className={styles.addQuestionButton} >
                <div id={props.question} onClick={props.deleteCard}
                 className={styles.deleteBtnWrapper}>
                 <IoTrashBinSharp />
                    </div>
                </Col>
            </Row>
        </Form>
    )
}
