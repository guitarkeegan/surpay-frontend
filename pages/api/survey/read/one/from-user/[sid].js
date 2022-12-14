import { User, Survey, UserSurvey, Question, Answer } from "../../../../../../db/models"
import { withSessionRoute } from "../../../../../../lib/withSession"

export default withSessionRoute(takeSurveyRoute)

async function takeSurveyRoute(req, res) {
    // check for 'get' request
    if (req.method !== "GET") {
        res.status(400).json({ message: "Must be a get request" })
    }

    // get the survey id from the url
    const {sid} = req.query
    console.log("surveyPk: " + sid)

    try {

        const userId = req.session.user.id
        console.log(`user id is ${userId}`)
        // check if user has submitted the survey already
        // returning both under_scored and camelCase for some reason
        const userSurveyData = await UserSurvey.findOne({
            where: {
                user_id: userId,
            },
        })
        if (userSurveyData) {
            res.status(200).json({ message: "Survey already submitted" })
            return
        }

        // found in surveyData

        const surveyData = await Survey.findByPk(sid, {
            include: {
                model: Question,
                include: {
                    model: Answer
                }
            
            }
        })
        console.log("survey data: ", surveyData)

        res.status(200).json(surveyData)
    } catch (e) {
        console.error(e)
        res.status(400).json({ message: "There was a problem getting the survey" })
    }
}
