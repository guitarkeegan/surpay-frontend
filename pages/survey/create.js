import ConnectWallet from "../../components/ConnectWallet"
import CreateSurvey from "../../components/CreateSurvey"
import CreateSurveyForm from "../../components/CreateSurveyForm"

export default function create(){

    return (
        <div>
            Lets Create a new Survey
            <ConnectWallet />
            <CreateSurvey />
            <CreateSurveyForm />
        </div>
    )
}