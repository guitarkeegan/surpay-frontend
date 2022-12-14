import useSWR from "swr"
import Container from "react-bootstrap/Container"
import styles from "../../styles/PastSurveysDistributor.module.css"
import { v4 as uuid4 } from "uuid"
import { IoTrashBinSharp } from "react-icons/io5"
import {useRouter} from 'next/router';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PastSurveys() {

    const router = useRouter()

    const { data, error } = useSWR("/api/survey/read/all/distributor", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    

    const handleDelete = async (event) => {

        event.preventDefault()
        console.log("delete this!")
        console.log(event.currentTarget)
        const sid = event.currentTarget.id
        console.log(sid)

        try {
        const response = await fetch("/api/survey/delete", {
            method: "DELETE",
            body: JSON.stringify({surveyId: sid}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        location.reload(false)
        console.log(json)

        router.push(`/dashboard/distributor/${response.distributorId}}`)
        console.log(response)
        
        
    } catch (e){
        console.log(e)
    }
    }

    return (
        <div>
        <div className={styles.panelTitleWrapper}>
            <h1>Launch a Past Survey</h1>
            </div>
            {data ? (
    data.map((item) => {
        return (
            <div key={item.id} id={item.id} className={styles.cardWrapper}>
                <div>
                    <div className={styles.cardTitle}>
                        <h2>{item.name}</h2>
                    </div>
                </div>
                <div>
                    <div className={styles.cardTitle}>
                        <h2>Survey Link</h2>
                    </div>
                </div>
                <div className={styles.takersAmountWrapper}>
                    <div className={styles.numOfTakersDiv}>
                        <h4>Number of Survey Takers</h4>
                    </div>
                    <div className={styles.takers}>
                        <h3>{item.number_of_takers_fullfilled}/{item.number_of_takers_desired}</h3>
                    </div>

                    <div>
                        <h4>Funding Amount: MATIC</h4>
                    </div>
                    <div className={styles.payout}>
                        <h3>{item.total_payout}</h3>
                    </div>
                </div>
                <div className={styles.cardButtonsWrapper}>
                    {/* <div>
                        <button className={styles.launchSurveyBtn}>
                            Launch Survey
                        </button>
                    </div> */}
                    <div id={item.id}
                     onClick={handleDelete}
                    className={styles.deleteBtnWrapper}
                    >
                        <IoTrashBinSharp />
                    </div>
                </div>
            </div>
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

