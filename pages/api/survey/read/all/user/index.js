import sequelize from "../../../../../../db/connection"
import { User, UserSurvey, Survey } from "../../../../../../db/models"

export default async function handler(req, res) {

    

    /* ------------USE THIS TO MOCK THE USER ID------------- */

    const mockUserId = 1 // get req.session.user.id for userId

    try {
    // check if which surveys the user has already taken
    const surveysTaken = await User.findByPk(mockUserId, {
        include: [{model: Survey, attributes: ["id"]}]
    })
    // find which suveys the user has already taken
    const surveysToExclude = []
    for (let obj of surveysTaken.surveys){
            surveysToExclude.push(obj.id)
    }

    //TODO: check if survey has already be complete in general

    const [results, metadata] = await sequelize.query(
        `SELECT * FROM Survey WHERE ID NOT IN(${surveysToExclude.join()});`)
        console.log(results)

    res.status(200).json(results)
} catch (e){
    console.error(e)
    res.status(400).json({message: "Get all surveys by user did not work"})
}
}

