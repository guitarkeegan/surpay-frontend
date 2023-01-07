import { Company, Survey } from "../../../../../db/models"
import { withSessionRoute } from "../../../../../lib/withSession"

export default withSessionRoute(updateSurveyRoute)

async function updateSurveyRoute (req, res){

    // check for put request
    if (req.method !== "PUT"){
        res.status(400).json({message: "Must be a PUT request"})
        return
    }
    // update all fields in survey
    const { name, number_of_takers_desired, total_payout, company_id, survey_is_funded, qa, id } =
        req.body

    // check if company is logged in
    // req.session.company_id
    try {
        // add the survey to the database
        const surveyData = await Survey.update({
            name,
            number_of_takers_desired,
            total_payout,
            company_id,
            survey_is_funded,
        },
        {
            where: {
                id: id
            }
        })
        console.log("Survey updated!")

        // question ids will be populated after the Questions are added
        // to the db
        const questionIds = []
        // question objects are created to use the bulkCreate method below
        const questionObjects = []
        for (let q of qa) {
            questionObjects.push({
                survey_id: surveyData.id,
                question_text: Object.keys(q).join(),
            })
        }

        // add questions to the db with the survey id returned in surveyData
        const questionData = await Question.update(questionObjects,)
        console.log("Questions added to db!")

        // get all of the question IDs and push them to questionIds array
        for (let data of questionData) {
            questionIds.push(data["dataValues"]["id"])
        }

        // format answer object here before storing in database
        const answerObjects = []
        // a better way? triple nested for-loop to create answer objects related to each question
        let indexCounter = 0
        for (let obj of qa) {
            for (let field of Object.values(obj)) {
                console.log(field)
                for (let a of field) {
                    answerObjects.push({ question_id: questionIds[indexCounter], answer_text: a })
                }
                indexCounter++
            }
        }

        const answerData = await Answer.bulkCreate(answerObjects)
        console.log("Answers saved in db!")
        res.status(200).json({ sid: surveyData.id })

    } catch (e) {
        console.error(e)
        res.status(400).json({ message: "Error with survey creation" })
    }
}