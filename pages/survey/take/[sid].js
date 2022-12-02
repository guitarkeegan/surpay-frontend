import backgroundDiv from "../../../public/assets/img/SUserDashBkgrnd.png"
import styles from "../../../styles/TakeSurvey.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import useSWR from "swr"
import SuccessModal from "../../../components/modals/SuccessModal"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function UserDashboard() {
    // save answer responses in state.
    const [answers, setAnswers] = useState([])
    const [currentAnswers, setCurrentAnswers] = useState([])

    

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

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
    }

    // update the answers in database by incrementing the # of times selected
    // update the survey history for the user
    // update the suvey model with number of takers fullfilled

    // hard coded api call for surveyId 1
    const { data, error } = useSWR("/api/survey/read/one/from-user/1", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const questions = data.questions.map((question) => question)
    // console.log(questions.map((question) => question.id))

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
                        {questions ? (
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
                        { answers.length >= questions.length &&
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
