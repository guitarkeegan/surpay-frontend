import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils"
import sequelize from "../../../../db/connection"
import { Survey, Company, Question, Answer } from "../../../../db/models"
import { withSessionRoute } from "../../../../lib/withSession"

export default withSessionRoute(deleteSurveyRoute)

async function deleteSurveyRoute(req, res) {

    const distributorId = req.session.distributor.id
    const surveyId = req.body.surveyId

    if (req.method !== "DELETE") {
        res.status(400).json({ message: "Must be a DELETE request" })
    }

    try {
        console.log("surveyId is ... ", surveyId)

        const surveyData = await Survey.findByPk(surveyId)

        if (surveyData.companyId !== distributorId || surveyData.number_of_takers_fullfilled > 0) {
            res.status(400).json({ message: "not authorized to delete this survey" })
        }

        await Survey.destroy({
            where: {
                id: surveyId
            }
        })

        res.status(200).json({ message: "recieved!" })

    } catch (e) {
        console.log(e)
        res.status(400).json({ message: "Failed to delete survey!" })
    }
}
