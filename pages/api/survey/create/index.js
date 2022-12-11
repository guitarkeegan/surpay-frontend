import { Company, Survey, Question, Answer } from "../../../../db/models"
import { bulkCreate, count } from "../../../../db/models/Company"
import { withSessionRoute } from "../../../../lib/withSession";

export default withSessionRoute(createSurveyRoute);

async function createSurveyRoute(req, res) {
    // only accept a post route
    if (req.method !== "POST") {
        res.status(400).json({ message: "Must be a post request" })
    }
    // pass in the new survey data from form
    const { surveyTitle, number_of_takers_desired, total_payout, survey_is_funded, qa } =
        req.body

    const { id, name } = req.session.distributor
    try {
        // add the survey to the database
        const surveyData = await Survey.create({
            name: surveyTitle,
            number_of_takers_desired,
            total_payout,
            company_id: id,
            survey_is_funded,
        })
        console.log("New survey created! sid is:" + surveyData.id)

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
        const questionData = await Question.bulkCreate(questionObjects)
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
