import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import useSWR from "swr"
import { useState } from "react"
import styles from "../../styles/TakeSurvey.module.css"
import { v4 as uuid4 } from "uuid"
import MockCaptchaModal from "../modals/CaptchaModal"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function TakeSurvey({user}) {

    console.log(user)
    const [selectedSurveyId, setSelectedSurveyId] = useState(0)

    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setSelectedSurveyId(event.target.value)
    }

    const { data, error } = useSWR("/api/survey/read/all/user", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    console.log(data)
    return (
        <Form>
            <Row className={"text-center mb-3"}>
                <h2 className={styles.takeASurvey}>Take a Survey</h2>
            </Row>
            <Row className="justify-content-center">
                <Col sm md={10}>
                    <label htmlFor="survey-select">Choose a survey:</label>
                    <br />
                    <select onChange={handleChange} name="survey" id="survey-select">
                        <option value="">--Please choose a survey--</option>
                        {data ? (
                            data.map((item) => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : (
                            <option value="no survey to load">no survey to load</option>
                        )}
                    </select>
                </Col>
            </Row>
            {selectedSurveyId === 0 ? 
                <Row className="justify-content-center text-center mt-3">
                <Col>
                    <p>Please select a survey</p>
                </Col>
            </Row>
            :
            <Row className="justify-content-center text-center mt-3">
                <Col>
                    <MockCaptchaModal selectedSurveyId={selectedSurveyId} userId={user} />
                </Col>
            </Row>
            }
        </Form>
    )
}
