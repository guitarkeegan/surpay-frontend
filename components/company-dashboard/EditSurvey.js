import useSWR from "swr"
import Container from "react-bootstrap/Container"
import styles from "../../styles/PastSurveysDistributor.module.css"
import { v4 as uuid4 } from "uuid"
import { IoTrashBinSharp } from "react-icons/io5"
import { MdModeEdit } from "react-icons/md"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function EditSurvey() {
    const { data, error } = useSWR("/api/survey/read/all/distributer", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data)

    const handleEdit = (e) => {
        console.log(e.currentTarget.id)
    }

    return (
        <div>
        <div className={styles.panelTitleWrapper}>
            <h1>Edit a Past Survey</h1>
            </div>
            {data ? (
                data.map((item) => {
                    return (
                        <div className={styles.cardWrapper}>
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
                                    <h3>{item.number_of_takers_desired}</h3>
                                </div>

                                <div>
                                    <h4>Funding Amount: MATIC</h4>
                                </div>
                                <div className={styles.payout}>
                                    <h3>{item.total_payout}</h3>
                                </div>
                            </div>
                            <div className={styles.cardButtonsWrapper}>
                                <div id={item.id} onClick={handleEdit} className={styles.editIconWrapper}>
                                <MdModeEdit />
                                </div>
                                <div className={styles.deleteBtnWrapper}>
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
