import sequelize from "../../../../../../../db/connection"
import { User, UserSurvey, Survey } from "../../../../../../../db/models"

import { withSessionRoute } from "../../../../../../../lib/withSession"

export default withSessionRoute(allCompletedSurveys);

async function allCompletedSurveys(req, res) {


    const userId = req.session.user.id // get the user Id for the logged-in user
    console.log(`user id is ${userId}`)

    try {
    // check if which surveys the user has already taken
    const surveysTaken = await User.findByPk(userId, {
        include: [{model: Survey, attributes: ["id"]}]
    })
    // find which suveys the user has already taken
    const surveysToInclude = []
    for (let obj of surveysTaken.surveys){
            surveysToInclude.push(obj.id)
    }

    //TODO: check if survey has already be complete in general

    const [results, metadata] = await sequelize.query(
        `SELECT * FROM Survey WHERE ID IN(${surveysToInclude.join()});`)
        console.log(results)

    res.status(200).json(results)
} catch (e){
    console.error(e)
    res.status(400).json({message: "Get all surveys by user did not work"})
}
}

