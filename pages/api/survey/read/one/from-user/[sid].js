import { User, Survey, UserSurvey } from "../../../../../../db/models"

export default async function handler(req, res) {
    // check for 'get' request
    if (req.method !== "GET") {
        res.status(400).json({ message: "Must be a get request" })
    }

    // get the survey id from the url
    const urlArr = req.url.split("/")
    const surveyPk = parseInt(urlArr[urlArr.length - 1])

    try {
        /* ------------USE THIS TO MOCK THE USER ID------------- */
        
        const mockUserId = 2 // get req.session.user.id for userId

        // check if user has submitted the survey already
        // returning both under_scored and camelCase for some reason
        const userSurveyData = await UserSurvey.findOne({
            where: {
                user_id: mockUserId,
            },
        })
        if (userSurveyData) {
            res.status(200).json({ message: "Survey already submitted" })
            return
        }

        // found in surveyData

        const surveyData = await Survey.findByPk(surveyPk)
        console.log(surveyData)

        res.status(200).json(surveyData)
    } catch (e) {
        console.error(e)
        res.status(400).json({ message: "There was a problem getting the survey" })
    }
}
