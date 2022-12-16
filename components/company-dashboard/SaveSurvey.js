import { ethers } from "ethers"
import Button from "react-bootstrap/Button"
import styles from "../../styles/FormStyles.module.css"

export default function SaveSurvey({surveyDetails, cards, distributorId, setSurveyId, setTotalPaymentAmount, setNumOfParticipantsDesired, handleSaveSuccess}) {

    const handleCreateSurvey = async function () {
        const { surveyTitle, numOfTakers, fundingAmount } = surveyDetails

        setTotalPaymentAmount(ethers.utils.parseEther(fundingAmount.toString()))
        setNumOfParticipantsDesired(numOfTakers)
        
        try {
            const surveyId = await fetch("/api/survey/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    surveyTitle: surveyTitle,
                    number_of_takers_desired: numOfTakers,
                    total_payout: fundingAmount,
                    company_id: distributorId,
                    survey_is_funded: true,
                    rawQa: cards,
                }),
            })
            setSurveyId(surveyId.toString())
            console.log(surveyId)
            handleSaveSuccess()

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Button
            onClick={async () => {
                await handleCreateSurvey({
                    onSuccess: (message) => console.log(message),
                    onError: (error) => console.log(error),
                })
            }}
            className={styles.completeSurveyButton}
            
        >
            Save Survey
        </Button>
    )
}
