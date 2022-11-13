import ConnectWallet from "../../components/ConnectWallet"
import CreateSurvey from "../../components/CreateSurvey"
import CreateSurveyForm from "../../components/CreateSurveyForm"
import SignInSignOut from "../../components/SignInSignOut"


export default function create(){

    return (
        <div>
            <SignInSignOut />
            Lets Create a new Survey
            <ConnectWallet />
            <CreateSurvey />
            <CreateSurveyForm />
        </div>
    )
}