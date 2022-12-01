import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import useSWR from 'swr'
import { useState } from "react"
import styles from "../../styles/TakeSurvey.module.css"
import { v4 as uuid4 } from "uuid"
import MockCaptchaModal from "../modals/CaptchaModal"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function TakeSurvey() {

    const { data, error } = useSWR('/api/survey/read/all/user', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
console.log(data)
    return (
        <Form>
            <Row className={"text-center mb-3"}>
                <h2>Take a Survey</h2>
            </Row>
            <Row className="justify-content-center">
                <Col sm md={10}>
                    <label for="survey-select">Choose a survey:</label>

                    <select name="survey" id="survey-select">
                        <option value="">--Please choose a survey--</option>
                        { data ? data.map(item=>{
                           return <option value={item.id}>{item.name}</option>
                        }):
                        <option value="no survey to load">no survey to load</option>
                        }
                    </select>
                </Col>
            </Row>

            <Row className="justify-content-center text-center mt-3">
                <Col>
                    <MockCaptchaModal />
                </Col>
            </Row>
        </Form>
    )
}
