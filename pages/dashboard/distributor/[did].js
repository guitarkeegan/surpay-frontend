import BackgroundImage from "../../../components/company-dashboard/BackgroundImage"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Stack from "react-bootstrap/Stack"
import styles from "../../../styles/DistributorDashboard.module.css"
import {useState} from "react"
import Button from "react-bootstrap/Button"
import DistAccount from "../../../components/company-dashboard/AccountSettings"
import NewSurvey from "../../../components/company-dashboard/CreateSurvey"
import PastSurvey from "../../../components/company-dashboard/PastSurveys"
import ManageSurvey from "../../../components/company-dashboard/EditSurvey"
import { withSessionSsr } from "../../../lib/withSession"
import { useRouter } from "next/router"

export default function CompanyDashboard({distributor}) {

  const router = useRouter()

    if (!distributor) {
        router.push("/")
    }

    const [selection, setSelection] = useState("Account settings");

    const renderScreen = () => {

        switch (selection) {
          case "Create a new survey":
            return <NewSurvey distributor={distributor} />
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
        <>
        <BackgroundImage />
        <div className={styles.titleDiv}>
                <h1 className={styles.h1Style}>Welcome {distributor.name}</h1>
            </div>
            <div className={styles.mainStyle}>
          
                <div className={styles.leftMain}>
             
                    <button onClick={() => setSelection("Create a new survey")} className={styles.toggleBtns}>Create a new survey</button>
                    <button onClick={()=>setSelection("Launch a past survey")} className={styles.toggleBtns}>Launch a past survey</button>
                    <button onClick={()=>setSelection("Manage a survey")} className={styles.toggleBtns}>Manage a survey</button>
                    <button onClick={()=>setSelection("Account settings")} className={styles.toggleBtns}>Account settings</button>
                
                </div>
                <div className={styles.rightMain}>{renderScreen()}</div>
            
            </div>
            
        </>
    )
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }) {
  const distributor = req.session.distributor

  const urlArray = req.url.split("/")
  const requestedId = parseInt(urlArray[urlArray.length - 1])

  if (requestedId !== distributor?.id) {
      return {
          notFound: true,
      }
  }

  return {
      props: {
          distributor: distributor,
      },
  }
})