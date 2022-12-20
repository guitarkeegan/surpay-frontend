import backgroundDiv from "../../../public/assets/img/SUserDashBkgrnd.png"
import styles from "../../../styles/TakeSurvey.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import useSWR from "swr"
import SuccessModal from "../../../components/modals/SuccessModal"
import {removeDuplicates, getAnswerIds} from "../../../utils/helpers"
import {useRouter} from "next/router"


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function TakeSurvey() {
    // save answer responses in state.
    const [answers, setAnswers] = useState([])

    const handleUpdate = (event) => {
        event.preventDefault()
        const questionId = parseInt(event.target.id)
        const answerId = parseInt(event.target.value)
        console.log(questionId, answerId)
        if (answerId !== 0){
            setAnswers([...answers, {questionId: questionId, answerId: answerId}])
        }
        
        console.log(answers)
        
    }

    const handleSubmit = async () =>{
        const submittedAnswers = removeDuplicates(answers)
        const answerIdsArr = getAnswerIds(submittedAnswers)
        const urlArr = (window.location.href).split("/")
        const surveyId = urlArr[urlArr.length - 1]
        console.log(`surveyId: ${surveyId}`)
        console.log("answerIds array: " + answerIdsArr)
        const data = {survey_id: surveyId, answers: answerIdsArr}
        console.log(data)
        try {
            const res = await fetch("/api/survey/update/user", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            console.log(JSON.stringify(res))
        } catch (error){
            console.log(error)
        }
    }

    
    // update the survey history for the user
    // update the suvey model with number of takers fullfilled

    
    const surveyId = window.location.href.split("/").pop()
    
    const { data, error } = useSWR(`/api/survey/read/one/from-distributor/${surveyId}`, fetcher)

    console.log("data: " + JSON.stringify(data))

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    let questions;
    if (data.questions) {
        questions = data.questions.map((question) => question)
    }
    
   
    return (
        <>
            <div className={styles.titleDiv}>
                <h1>Welcome User</h1>
            </div>

            <div className={styles.mainWrapper}>
                <div className={styles.main}>
                    {data ? <h2> {data.name} </h2> : <h2>Survey Title</h2>}

                    <form className={styles.surveyForm}
                    onSubmit={handleSubmit}>
                        {!data.message ? (
                            questions.map((question) => {
                                return (
                                    <>
                                        <label key={question.id} className={styles.questionStyle}>
                                            {question.question_text}
                                        </label>
                                        <select
                                            className={styles.selectStyle}
                                            name={question.question_text}
                                            id={question.id}
                                            onChange={handleUpdate}
                                        >
                                            <option className={styles.topOption} value="0">
                                                Select a dropdown option
                                            </option>
                                            {questions &&
                                                question.answers.map((answer) => {
                                                    return (
                                                        <option key={answer.id} value={answer.id}
                                                        id={answer.question_id}>
                                                            {answer.answer_text}
                                                        </option>
                                                    )
                                                })}
                                        </select>
                                    </>
                                )
                            })
                        ) : (
                            <p>no data!</p>
                        )}
                        { answers.length > 0 &&
                        <SuccessModal submitAnswers={handleSubmit} />
                        }
                    </form>
                </div>
            </div>

            <div
                style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    overflow: "hidden",
                }}
            >
                <Image src={backgroundDiv} layout="fill" objectFit="cover" />
            </div>
        </>
    )
}
