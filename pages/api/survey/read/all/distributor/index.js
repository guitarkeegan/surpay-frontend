import {Company, Survey} from "../../../../../../db/models"
import { Op } from "sequelize"
import { withSessionRoute } from "../../../../../../lib/withSession"

export default withSessionRoute(readAllSurveysRoute)

async function readAllSurveysRoute(req, res){

    const distributorId = req.session.distributor.id

    try {
        // will only return surveys that were created by the company
    const distributerSurveys = await Survey.findAll({
        where: {
            company_id: {
                [Op.eq]: distributorId
            }
        }
    })

    res.status(200).json(distributerSurveys)
} catch (e) {
    console.error(e)
    res.status(400).json({message: "Get all distributer suveys failed"})
}
}