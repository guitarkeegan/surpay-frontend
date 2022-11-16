import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/FormStyles.module.css"

export default function QuestionCard() {
    return (
        <Form className={styles.questionCard}>
            <Row className="justify-content-center">
                <Col sm md={10}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Question"
                            size="lg"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 1"
                            size="lg"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 2"
                            size="lg"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 3"
                            size="lg"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-start">
                <Col sm md={8} className={styles.answerFields}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            className={styles.inputFields}
                            type="text"
                            placeholder="Option 4"
                            size="lg"
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
