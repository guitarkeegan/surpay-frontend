import {Company, Survey} from "../../../../../../db/models"
import { Op } from "sequelize"
export default async function handler(req, res){

    /* ------------ MOCK COMPANY ID ---------------*/
    const mockCompanyId = 1

    try {
        // will only return surveys that were created by the company
    const distributerSurveys = await Survey.findAll({
        where: {
            company_id: {
                [Op.eq]: mockCompanyId
            }
        }
    })

    res.status(200).json(distributerSurveys)
} catch (e) {
    console.error(e)
    res.status(400).json({message: "Get all distributer suveys failed"})
}
}