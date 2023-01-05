import backgroundDiv from "../../../public/assets/img/SUserDashBkgrnd.png"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import styles from "../../../styles/TakeSurvey.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import useSWR from "swr"
import SuccessModal from "../../../components/modals/SuccessModal"
import {removeDuplicates, getAnswerIds} from "../../../utils/helpers"
import {useRouter} from "next/router"


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function updateSurvey() {
    // save answer responses in state.
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

    const handleChange = (event)=> {
        event.preventDefault()
        const { name, value } = event.target
        console.log(name, value)
        setSurveyDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleDelete = (event) => {
      console.log("delete card!")
      event.preventDefault()
      const objId = event.currentTarget.id
      // delete question with the passed id
      setCards(cards.filter(obj => obj.question !== objId))
    }

    // const handleSubmit = async () =>{
    //     const submittedAnswers = removeDuplicates(answers)
    //     const answerIdsArr = getAnswerIds(submittedAnswers)
    //     const urlArr = (window.location.href).split("/")
    //     const surveyId = urlArr[urlArr.length - 1]
    //     console.log(`surveyId: ${surveyId}`)
    //     console.log("answerIds array: " + answerIdsArr)
    //     const data = {survey_id: surveyId, answers: answerIdsArr}
    //     console.log(data)
    //     try {
    //         const res = await fetch("/api/survey/update/user", {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(data),
    //         })
    //         console.log(JSON.stringify(res))
    //     } catch (error){
    //         console.log(error)
    //     }
    // }

    
    // update the survey history for the user
    // update the suvey model with number of takers fullfilled

    
    const surveyId = window.location.href.split("/").pop()
    
    const { data, error } = useSWR(`/api/survey/read/one/from-distributor/to-update/${surveyId}`, fetcher)

    console.log("data: " + JSON.stringify(data))
    

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    let questions;
    if (data.questions) {
        questions = data.questions.map((question) => question)
    }
    
   
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
                    question={card.question}
                    option1={card.option1}
                    option2={card.option2}
                    option3={card.option3}
                    option4={card.option4}
                    deleteCard={handleDelete}
                    />
                )
            })}
            {parseFloat(surveyDetails.fundingAmount) > 0 ? (
                <Container className="d-flex justify-content-center mt-5">
                    <CreateSurveyLogic
                     distributor={distributor}
                     surveyDetails={surveyDetails}
                     cards={cards}
                    />
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}
