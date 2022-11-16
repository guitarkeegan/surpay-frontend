import BackgroundImage from "../../../components/company-dashboard/BackgroundImage"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Stack from "react-bootstrap/Stack"
import styles from "../../../styles/DistributerDashboard.module.css"
import {useState} from "react"
import Button from "react-bootstrap/Button"
import DistAccount from "../../../components/company-dashboard/AccountSettings"
import NewSurvey from "../../../components/company-dashboard/CreateSurvey"

export default function CompanyDashboard() {

    const [selection, setSelection] = useState("Account settings");




    const renderScreen = () => {

        switch (selection) {
          case "Create a new survey":
            return <NewSurvey />
            break;
          case "Launch a past survey":
            return <PastSurvey />
            break;
          case "Manage a survey":
            return <ManageSurvey />;
            break;
          case "Account settings":
            return <DistAccount />;
            break;
          default:
            return <DistAccount />;
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
                    <Button onClick={() => setSelection("Create a new survey")} className={styles.toggleBtns}>Create a new survey</Button>
                    <Button className={styles.toggleBtns}>Launch a past survey</Button>
                    <Button className={styles.toggleBtns}>Manage a survey</Button>
                    <Button className={styles.toggleBtns}>Account settings</Button>
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
