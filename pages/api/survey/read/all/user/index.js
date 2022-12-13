import sequelize from "../../../../../../db/connection"
import { User, UserSurvey, Survey } from "../../../../../../db/models"

import { withSessionRoute } from "../../../../../../lib/withSession"

export default withSessionRoute(allUntakenSurveys)

async function allUntakenSurveys(req, res) {
    const userId = req.session.user.id // get the user Id for the logged-in user
    console.log(`user id is ${userId}`)

    try {
        // check which surveys the user has already taken
        const surveysTaken = await User.findByPk(userId, {
            include: [{ model: Survey, attributes: ["id"] }],
        })
        console.log("surveys taken: ", surveysTaken)
        console.log("surveys taken length: ", surveysTaken.surveys.length)
        if (surveysTaken.surveys.length !== 0) {
            // find which suveys the user has already taken
            const surveysToExclude = []

            for (let obj of surveysTaken.surveys) {
                surveysToExclude.push(obj.id)
            }
            const [results, metadata] = await sequelize.query(
                `SELECT * FROM Survey WHERE ID NOT IN(${surveysToExclude.join()});`
            )
            console.log(results)

            res.status(200).json(results)
        }

        const allSurveys = await Survey.findAll()
        res.status(200).json(allSurveys)

        //TODO: check if survey has already be complete in general
    } catch (e) {
        console.error(e)
        res.status(400).json({ message: "Get all surveys by user did not work" })
    }
}
