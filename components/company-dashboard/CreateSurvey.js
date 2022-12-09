import Form from "react-bootstrap/Form"
import styles from "../../styles/FormStyles.module.css"
import QuestionCard from "./QuestionCard"
import QuestionCardCreated from "./QuestionCardCreated"
import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import CreateSurveyLogic from "./CreateSurveyLogic"
import { v4 as uuid4 } from "uuid"


export default function NewSurvey() {
    const [surveyDetails, setSurveyDetails] = useState({
        surveyTitle: "",
        numOfTakers: "",
        fundingAmount: "",
    })

    const [cards, setCards] = useState([])

    useEffect(() => {
        try {
            localStorage.setItem("surveyData", JSON.stringify(cards))
        } catch (err) {
            console.log(err)
        }
    }, [cards])

    useEffect(() => {
        try {
            localStorage.setItem("surveyHeader", JSON.stringify(surveyDetails))
        } catch (err) {
            console.log(err)
        }
    }, [surveyDetails])

    function createNewCard(newCard) {
        setCards((prev) => {
            return [...prev, newCard]
        })
    }

    function handleChange(event) {
        event.preventDefault()
        const { name, value } = event.target
        console.log(surveyDetails)
        setSurveyDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleDelete = () => {
      console.log("delete card!")
    }

    // function saveCard(){

    // }

    return (
        <>
            <div className={styles.createSurveyWrapper}>
                <h2>Create a Survey</h2>
            </div>

            <Form>
                <div className={styles.surveyTitleWrapper}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Survey Title</Form.Label>
                        <Form.Control
                            value={surveyDetails.surveyTitle}
                            onChange={handleChange}
                            name={"surveyTitle"}
                            className={styles.inputFields}
                            autoComplete="off"
                            type="text"
                            placeholder=""
                            size="lg"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        value={surveyDetails.numOfTakers}
                        onChange={handleChange}
                        name={"numOfTakers"}
                        className={styles.inputFields}
                        autoComplete="off"
                        type="text"
                        placeholder="Number of survey takers"
                        size="lg"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control
                        value={surveyDetails.fundingAmount}
                        onChange={handleChange}
                        name={"fundingAmount"}
                        className={styles.inputFields}
                        autoComplete="off"
                        type="text"
                        placeholder="Funding Amount"
                        size="lg"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form>

            <QuestionCard addCard={createNewCard} />
            {cards.map((card) => {
                return (
                    <QuestionCardCreated
                        latestCard={card && card[card.length - 1]}
                        deleteCard={handleDelete}
                    />
                )
            })}
            {parseFloat(surveyDetails.fundingAmount) > 0 ? (
                <Container className="d-flex justify-content-center mt-5">
                    <CreateSurveyLogic />
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}
