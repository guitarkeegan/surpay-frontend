import BackgroundImage from "../../../components/company-dashboard/BackgroundImage"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Stack from "react-bootstrap/Stack"
import styles from "../../../styles/DistributerDashboard.module.css"
import {useState} from "react"
import Button from "react-bootstrap/Button"
import UserAccount from "../../../components/user-dashboard/Account"
import TakeSurvey from "../../../components/user-dashboard/TakeSurvey"
import PastSurveys from "../../../components/user-dashboard/PreviousSurveys"

export default function UserDashboard() {

    const [selection, setSelection] = useState("Account settings");

    const renderScreen = () => {

        switch (selection) {
          case "Take a new survey":
            return <TakeSurvey />
            break;
          case "Launch a past survey":
            return <PastSurveys />
            break;
          case "Account settings":
            return <UserAccount />;
            break;
          default:
            return <UserAccount />;
        }
      }

    return (
        <div className={styles.outerWrapper}>
            <div className="h1Wrapper">
                <h1 className={styles.greeting}>Welcome to Surpay</h1>
            </div>
            <Container fluid className={styles.dashboardWrapper}>
            <Row>
                <Col sm md={3} className={"leftSide"}>
                <Stack>
                    <Button onClick={() => setSelection("Take a new survey")} className={styles.toggleBtns}>Take a new survey</Button>
                    <Button onClick={()=>setSelection("Launch a past survey")} className={styles.toggleBtns}>Previous Surveys Taken</Button>
                    <Button onClick={()=>setSelection("Account settings")} className={styles.toggleBtns}>Account settings</Button>
                </Stack>
                </Col>
                <Col sm md={8} className={"rightSide"}>
                {renderScreen()}
                </Col>
            </Row>

            </Container>
            <BackgroundImage />
        </div>
    )
}
