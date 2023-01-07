// import backgroundImage from "/assets/img/SUserDashBkgrnd.png"
import styles from "../../../styles/UserDashboard.module.css"
import { useState } from "react"
import UserAccount from "../../../components/user-dashboard/Account"
import TakeSurvey from "../../../components/user-dashboard/TakeSurvey"
import PastSurveys from "../../../components/user-dashboard/PreviousSurveys"
import { withSessionSsr } from "../../../lib/withSession"
import { useRouter } from "next/router"
import Image from "next/image"

export default function UserDashboard({ user }) {
    const router = useRouter()

    if (!user) {
        router.push("/")
    }

    const [selection, setSelection] = useState("Account settings")

    const renderScreen = () => {
        switch (selection) {
            case "Take a new survey":
                return <TakeSurvey user={user} />
                break
            case "Launch a past survey":
                return <PastSurveys user={user} />
                break
            case "Account settings":
                return <UserAccount user={user} />
                break
            default:
                return <UserAccount />
        }
    }

    return (
        <>
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
                <Image
                    src="/assets/img/SUserDashBkgrnd.png"
                    alt={"Colorful lines over black canvas"}
                    layout="fill"
                    objectFit="cover"
                    // objectPosition="fixed"
                />
            </div>
            <div className={styles.titleDiv}>
                <h1 className={styles.h1Style}>Welcome User {user.id}</h1>
            </div>
            <div className={styles.mainStyle}>
                <div className={styles.leftMain}>
                    <button onClick={() => setSelection("Take a new survey")}>
                        Take a Survey
                    </button>
                    <button onClick={() => setSelection("Launch a past survey")}>
                        View past Surveys
                    </button>
                    <button onClick={() => setSelection("Account settings")}>
                        Account Settings
                    </button>
                </div>
                <div className={styles.rightMain}>{renderScreen()}</div>
            </div>
        </>
    )
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }) {
    const user = req.session.user

    const urlArray = req.url.split("/")
    const requestedId = parseInt(urlArray[urlArray.length - 1])

    if (requestedId !== user?.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            user: user,
        },
    }
})
