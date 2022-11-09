import { useState } from "react"
import uuid from "react-uuid"

export default function CreateSurveyForm() {
    const questionNumber = 1
    const [questions, setQuestion] = useState("")
    const [surveyTitle, setSurveyTitle] = useState("")

    


    return (
        <div>
        <h1>{surveyTitle ? surveyTitle : "Survey Title?"}</h1>
        <form>
            <label className="mr-2">Survey Title</label>
            <input onChange={(e) => setSurveyTitle(e.target.value)} className="border-2 p-2 rounded-lg border-slate-500 mr-2" name="survey-title"></input>
            <button className="border-2 p-2 rounded-lg hover:bg-slate-500" type="button">Start Adding Questions</button>
        </form>
        </div>
    )
}
