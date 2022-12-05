import useSWR from "swr"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import styles from "../../styles/PreviousSurveys.module.css"

// wrapper for fetch
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PastSurveys() {
    const { data, error } = useSWR("/api/survey/read/all/user/taken", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data)

    return (
        <div>
        <div className="text-center mb-5">
            <h1>Previous Surveys Taken</h1>
            </div>
            {data ? (
                data.map((item) => {
                    return (
                        <Container className={styles.cardWrapper}>
                            <Row>
                                <Col>
                                    <div>
                                        <h4>Survey Name: {item.name}</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <h4>Survey ID: {item.id}</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <h4>Date Completed: TODO</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <h4>Payment Status: TODO</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    )
                })
            ) : (
                <Container>
                    <h2>{"No surveys found"}</h2>
                </Container>
            )}
        </div>
    )
}
