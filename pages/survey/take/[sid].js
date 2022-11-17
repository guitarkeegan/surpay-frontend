import BackgroundImage from "../../../components/company-dashboard/BackgroundImage"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../../styles/Survey.module.css"
import {useState} from "react"
import Button from "react-bootstrap/Button"
import useSWR from 'swr'

export default function UserDashboard() {


    return (
        <div className={styles.outerWrapper}>
            <div className="h1Wrapper text-center">
                <h1 className={styles.greeting}>Welcome User</h1>
            </div>
            <Container className={styles.dashboardWrapper}>
            <Row>
                <Col sm md={8}>

                </Col>
            </Row>

            </Container>
            <BackgroundImage />
        </div>
    )
}
