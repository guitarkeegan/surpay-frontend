import BackgroundImage from "../../../components/company-dashboard/BackgroundImage"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../../styles/Survey.module.css"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function UserDashboard() {

    // hard coded api call for surveyId 1
    const { data, error } = useSWR("/api/survey/read/one/from-user/1", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const jsonString = JSON.stringify(data)
    // TODO: sort through this mess!
    // const questions = data.questions.map(question=>question.question_text)
    // const answers = []

    // for (let question of data.questions){
    //     answers.push(question.answers)
    // }
    // console.log(answers)
 

    return (
        <div className={styles.outerWrapper}>
            <div className="h1Wrapper text-center">
                <h1 className={styles.greeting}>Welcome User</h1>
            </div>
            <Container className={styles.dashboardWrapper}>
           {data
           ?
            <pre>{jsonString}</pre>
          
            :
            <></>
           }
           
           <Container className="buttonHolder">
            <Button>Finish Survey</Button>
            </Container>
            </Container>
            
            <BackgroundImage />
        </div>
    )
}
