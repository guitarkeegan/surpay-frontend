import sequelize from "../../../../../../../db/connection"
import { User, UserSurvey, Survey } from "../../../../../../../db/models"

import { withSessionRoute } from "../../../../../../../lib/withSession"

export default withSessionRoute(allCompletedSurveys);

async function allCompletedSurveys(req, res) {


    const userId = req.session.user.id // get the user Id for the logged-in user
    console.log(`user id is ${userId}`)

    try {
    // check which surveys the user has already taken
    const surveysTaken = await User.findByPk(userId, {
        include: [{model: Survey, attributes: ["id"]}]
    })
    // find which suveys the user has already taken
    const surveysToInclude = []
    for (let obj of surveysTaken.surveys){
            surveysToInclude.push(obj.id)
    }

    console.log("surveys to include... ", surveysToInclude)
    //TODO: check if survey has already been completed in general
    if (surveysToInclude.length === 0){
        console.log("no surveys to include")
        res.status(200).json({message: "No surveys have been taken"})
        return
    }
    const [results, metadata] = await sequelize.query(
        `SELECT * FROM Survey WHERE ID IN(${surveysToInclude.join()});`)
        console.log(results)

    res.status(200).json(results)
} catch (e){
    console.error(e)
    res.status(400).json({message: "Get all surveys by user did not work"})
}
}

