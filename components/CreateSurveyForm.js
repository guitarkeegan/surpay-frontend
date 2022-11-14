import { useState } from "react"
import uuid from "react-uuid"

export default function CreateSurveyForm() {
    const questionNumber = 1
    const [questions, setQuestion] = useState("")
    const [surveyTitle, setSurveyTitle] = useState("")

    const addNewQuestion = () => {
        
    }

    return (
        <div>
        <h1>{surveyTitle ? surveyTitle : "Survey Title?"}</h1>
        <form>
            <label className="">Survey Title</label>
            <input autoComplete="off" onChange={(e) => setSurveyTitle(e.target.value)} className="" name="survey-title"></input>
            <button
             className="" type="button"
            //  onSubmit={}
             >Add Question</button>
        </form>
        </div>
    )
}
