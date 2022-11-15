import {Company, Survey, Question, Answer} from "../../../../db/models"

export default async function handler(req, res){

    if (req.method !== "POST"){
        res.status(400).json({message: "Must be a post request"})
    }
    const {
        name,
        number_of_takers_desired,
        total_payout,
        company_id,
        survey_is_funded,
        qa,
        } = req.body

    // check if company is logged in
    // req.session.company_id

    const surveyData = await Survey.create({
        name, number_of_takers_desired, total_payout, company_id, survey_is_funded
    })
    console.log("New survey created! sid is:" + surveyData.id)

    const questionIds = []
    const questionObjects = []
    for (let q of qa){
        questionObjects.push({survey_id: surveyData.id, question_text: Object.keys(q).join()})
    }
    console.log(questionObjects)

    const questionData = await Question.bulkCreate(questionObjects)
    console.log('question data: ', questionData)

    res.status(200).json({sid: surveyData.id})

}